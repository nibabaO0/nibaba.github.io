<script setup lang="ts">
// 代码实验分类
const categories = [
  { id: 'performance', name: '性能优化', icon: 'fas fa-bolt' },
  { id: 'algorithms', name: '算法实现', icon: 'fas fa-code' },
  { id: 'patterns', name: '设计模式', icon: 'fas fa-cubes' },
  { id: 'utils', name: '工具函数', icon: 'fas fa-tools' }
]

// 代码示例数据
const codeExamples = [
  {
    id: 1,
    category: 'performance',
    title: '虚拟列表实现',
    description: '处理大量数据列表的高性能渲染方案，仅渲染可视区域内的元素',
    language: 'typescript',
    code: `import { useState, useRef, useCallback, useEffect } from 'react'

interface VirtualListProps<T> {
  items: T[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: T, index: number) => React.ReactNode
}

function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 计算可视区域内的起始索引和数量
  const startIndex = Math.floor(scrollTop / itemHeight)
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 2 // 缓冲2个元素
  const endIndex = Math.min(startIndex + visibleCount, items.length)

  // 可视区域内的元素
  const visibleItems = items.slice(startIndex, endIndex)

  // 总高度和偏移量
  const totalHeight = items.length * itemHeight
  const offsetY = startIndex * itemHeight

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ height: containerHeight, overflow: 'auto' }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>
    </div>
  )
}`,
    tags: ['React', '性能', '虚拟化'],
    complexity: '中等',
    usage: '大数据列表渲染'
  },
  {
    id: 2,
    category: 'performance',
    title: '图片懒加载 Hook',
    description: '基于 Intersection Observer API 的图片懒加载实现',
    language: 'typescript',
    code: `import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  placeholder?: string
  alt?: string
  threshold?: number
}

function useLazyImage({
  src,
  placeholder,
  threshold = 0.1
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src, threshold])

  const handleLoad = () => setIsLoaded(true)

  return { imageSrc, isLoaded, imgRef, handleLoad }
}

// 使用示例
function LazyImage({ src, placeholder, alt }: LazyImageProps) {
  const { imageSrc, isLoaded, imgRef, handleLoad } = useLazyImage({
    src,
    placeholder
  })

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      onLoad={handleLoad}
      style={{ opacity: isLoaded ? 1 : 0.5, transition: 'opacity 0.3s' }}
    />
  )
}`,
    tags: ['React', '图片', '懒加载'],
    complexity: '简单',
    usage: '图片性能优化'
  },
  {
    id: 3,
    category: 'algorithms',
    title: 'LRU缓存实现',
    description: '最近最少使用缓存算法，自动淘汰最久未访问的数据',
    language: 'typescript',
    code: `class LRUCache<K, V> {
  private capacity: number
  private cache: Map<K, V>
  private order: K[]

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
    this.order = []
  }

  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined

    // 更新访问顺序 - 移到最新位置
    this.order = this.order.filter(k => k !== key)
    this.order.push(key)

    return this.cache.get(key)
  }

  put(key: K, value: V): void {
    // 如果已存在，更新值并调整顺序
    if (this.cache.has(key)) {
      this.cache.set(key, value)
      this.order = this.order.filter(k => k !== key)
      this.order.push(key)
      return
    }

    // 检查容量，淘汰最久未使用的
    if (this.order.length >= this.capacity) {
      const oldestKey = this.order.shift()
      if (oldestKey) {
        this.cache.delete(oldestKey)
      }
    }

    // 添加新数据
    this.cache.set(key, value)
    this.order.push(key)
  }

  size(): number {
    return this.cache.size
  }

  clear(): void {
    this.cache.clear()
    this.order = []
  }
}

// 使用示例
const cache = new LRUCache<string, number>(3)
cache.put('a', 1)
cache.put('b', 2)
cache.put('c', 3)
cache.get('a') // 'a'变为最新
cache.put('d', 4) // 'b'被淘汰
console.log(cache.get('b')) // undefined`,
    tags: ['算法', '缓存', '数据结构'],
    complexity: '中等',
    usage: '缓存管理'
  },
  {
    id: 4,
    category: 'patterns',
    title: '发布-订阅模式',
    description: '实现事件驱动的消息通信机制，解耦组件间的依赖',
    language: 'typescript',
    code: `type EventHandler<T = any> = (data: T) => void

class EventBus {
  private events: Map<string, Set<EventHandler>>

  constructor() {
    this.events = new Map()
  }

  // 订阅事件
  on<T>(event: string, handler: EventHandler<T>): void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set())
    }
    this.events.get(event)!.add(handler)
  }

  // 取消订阅
  off<T>(event: string, handler: EventHandler<T>): void {
    const handlers = this.events.get(event)
    if (handlers) {
      handlers.delete(handler)
    }
  }

  // 发布事件
  emit<T>(event: string, data: T): void {
    const handlers = this.events.get(event)
    if (handlers) {
      handlers.forEach(handler => handler(data))
    }
  }

  // 一次性订阅
  once<T>(event: string, handler: EventHandler<T>): void {
    const wrapper: EventHandler<T> = (data) => {
      handler(data)
      this.off(event, wrapper)
    }
    this.on(event, wrapper)
  }

  // 清除所有订阅
  clear(): void {
    this.events.clear()
  }
}

// 使用示例
const bus = new EventBus()

// 组件A订阅
bus.on('user-login', (user) => {
  console.log('用户登录:', user.name)
})

// 组件B订阅
bus.on('user-login', (user) => {
  console.log('更新UI:', user.avatar)
})

// 组件C发布
bus.emit('user-login', { name: '张三', avatar: 'avatar.png' })`,
    tags: ['设计模式', '事件', '解耦'],
    complexity: '简单',
    usage: '组件通信'
  },
  {
    id: 5,
    category: 'utils',
    title: '深拷贝实现',
    description: '处理各种数据类型的完整深拷贝方案',
    language: 'typescript',
    code: `function deepClone<T>(obj: T, visited = new WeakMap()): T {
  // 处理基本类型和null
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // 处理循环引用
  if (visited.has(obj)) {
    return visited.get(obj)
  }

  // 处理Date
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T
  }

  // 处理RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T
  }

  // 处理Map
  if (obj instanceof Map) {
    const clone = new Map()
    visited.set(obj, clone)
    obj.forEach((value, key) => {
      clone.set(deepClone(key, visited), deepClone(value, visited))
    })
    return clone as T
  }

  // 处理Set
  if (obj instanceof Set) {
    const clone = new Set()
    visited.set(obj, clone)
    obj.forEach(value => {
      clone.add(deepClone(value, visited))
    })
    return clone as T
  }

  // 处理Array
  if (Array.isArray(obj)) {
    const clone: any[] = []
    visited.set(obj, clone)
    obj.forEach((item, index) => {
      clone[index] = deepClone(item, visited)
    })
    return clone as T
  }

  // 处理普通Object
  const clone = Object.create(Object.getPrototypeOf(obj))
  visited.set(obj, clone)

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], visited)
    }
  }

  return clone
}

// 使用示例
const original = {
  name: '张三',
  date: new Date(),
  regex: /test/gi,
  nested: { a: 1, b: [2, 3] }
}
original.self = original // 循环引用

const cloned = deepClone(original)
console.log(cloned.name) // '张三'
console.log(cloned !== original) // true`,
    tags: ['工具', '拷贝', '数据'],
    complexity: '中等',
    usage: '数据复制'
  }
]

// 当前选中的分类
const activeCategory = ref('performance')

// 筛选后的代码示例
const filteredExamples = computed(() => {
  return codeExamples.filter(e => e.category === activeCategory.value)
})

// 当前查看的代码
const currentExample = ref(codeExamples[0])

// 复制到剪贴板
const copyToClipboard = async (text: string) => {
  try {
    if (process.client) {
      await navigator.clipboard.writeText(text)
    }
  } catch {
    // fallback
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}

// SEO
useHead({
  title: '代码实验室 - TechPortfolio',
  meta: [
    { name: 'description', content: '代码实验室 - 展示前端性能优化、算法实现、设计模式和工具函数的代码示例。' }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">代码实验室</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          实践是最好的学习方式。这里记录着我在实际项目中积累的代码片段，
          涵盖性能优化、算法实现、设计模式等各个领域。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- 左侧分类导航 -->
        <div class="lg:col-span-1">
          <div class="bg-white border border-gray-200 rounded-xl p-4">
            <h3 class="font-semibold mb-4">代码分类</h3>
            <div class="space-y-2">
              <button
                v-for="cat in categories"
                :key="cat.id"
                :class="[
                  'flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors',
                  activeCategory === cat.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'hover:bg-gray-50'
                ]"
                @click="activeCategory = cat.id; currentExample = filteredExamples[0]"
              >
                <i :class="[cat.icon, 'mr-3']"></i>
                <span>{{ cat.name }}</span>
                <span class="ml-auto text-xs text-gray-500">
                  {{ codeExamples.filter(e => e.category === cat.id).length }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- 右侧代码展示 -->
        <div class="lg:col-span-3">
          <!-- 代码示例列表 -->
          <div class="space-y-4 mb-8">
            <button
              v-for="example in filteredExamples"
              :key="example.id"
              :class="[
                'block w-full p-4 rounded-xl text-left transition-all border',
                currentExample.id === example.id
                  ? 'bg-blue-50 border-blue-200'
                  : 'bg-white border-gray-200 hover:border-blue-100'
              ]"
              @click="currentExample = example"
            >
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold">{{ example.title }}</h4>
                <span class="text-xs text-gray-500">{{ example.complexity }}</span>
              </div>
              <p class="text-sm text-gray-600 mb-2">{{ example.description }}</p>
              <div class="flex gap-2">
                <span
                  v-for="tag in example.tags"
                  :key="tag"
                  class="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </button>
          </div>

          <!-- 代码详情展示 -->
          <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <!-- 代码头部 -->
            <div class="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">
              <div>
                <h3 class="font-semibold text-lg">{{ currentExample.title }}</h3>
                <p class="text-sm text-gray-600">{{ currentExample.usage }}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-xs bg-gray-200 px-2 py-1 rounded">
                  {{ currentExample.language }}
                </span>
                <button
                  class="text-sm text-blue-600 hover:text-blue-700"
                  @click="copyToClipboard(currentExample.code)"
                >
                  <i class="fas fa-copy mr-1"></i> 复制
                </button>
              </div>
            </div>

            <!-- 代码内容 -->
            <div class="p-6">
              <pre class="bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto font-mono text-sm leading-relaxed">
                <code>{{ currentExample.code }}</code>
              </pre>
            </div>

            <!-- 代码说明 -->
            <div class="px-6 py-4 bg-gray-50 border-t">
              <h4 class="font-medium mb-2">实现说明</h4>
              <p class="text-sm text-gray-600">{{ currentExample.description }}</p>
              <div class="flex gap-2 mt-3">
                <span
                  v-for="tag in currentExample.tags"
                  :key="tag"
                  class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #1f2937;
}

pre::-webkit-scrollbar {
  height: 8px;
}

pre::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

pre code {
  display: block;
  white-space: pre;
}
</style>