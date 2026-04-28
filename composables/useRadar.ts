// 技术雷达数据、ECharts图表逻辑

import * as echarts from 'echarts'

export interface RadarTechItem {
  name: string
  status: string
  note: string
}

export interface RadarSection {
  ring: 'adopt' | 'trial' | 'assess' | 'hold'
  title: string
  color: 'green' | 'yellow' | 'orange' | 'red'
  description: string
  items: RadarTechItem[]
}

const radarSections: RadarSection[] = [
  {
    ring: 'adopt',
    title: '采纳',
    color: 'green',
    description: '已在生产环境使用，建议采用',
    items: [
      { name: 'React 18+', status: '生产使用', note: 'Concurrent Mode、Suspense支持' },
      { name: 'TypeScript', status: '全面采用', note: '类型安全，降低运行时错误' },
      { name: 'Tailwind CSS', status: '生产使用', note: '原子化CSS，开发效率高' },
      { name: 'Vite', status: '默认构建工具', note: '快速HMR，开发体验好' },
      { name: 'Nuxt.js', status: 'SSR首选', note: 'SEO友好，自动路由' },
      { name: 'ESLint + Prettier', status: '必配', note: '代码规范统一' }
    ]
  },
  {
    ring: 'trial',
    title: '试验',
    color: 'yellow',
    description: '在非关键项目尝试，有潜力但需验证',
    items: [
      { name: 'WebAssembly', status: '性能关键场景', note: '计算密集型任务加速' },
      { name: 'React Server Components', status: '探索中', note: '减少客户端JS体积' },
      { name: 'AI Agents', status: '项目集成', note: '智能助手、代码生成' },
      { name: 'Edge Runtime', status: '边缘计算', note: 'Cloudflare Workers、Vercel Edge' },
      { name: 'Zustand', status: '状态管理备选', note: '轻量级，比Redux简洁' }
    ]
  },
  {
    ring: 'assess',
    title: '评估',
    color: 'orange',
    description: '值得关注，需进一步调研',
    items: [
      { name: 'Deno', status: '评估中', note: '安全沙箱、原生TypeScript' },
      { name: 'Zig', status: '了解', note: '高性能系统编程语言' },
      { name: 'WebGPU', status: '关注', note: '下一代Web图形API' },
      { name: 'Fresh (Deno)', status: '评估', note: 'Preact + Islands架构' },
      { name: 'htmx', status: '概念验证', note: 'HTML驱动的前端方案' }
    ]
  },
  {
    ring: 'hold',
    title: '暂缓',
    color: 'red',
    description: '建议推迟或避免使用',
    items: [
      { name: 'jQuery', status: '已淘汰', note: '现代框架更优' },
      { name: 'IE 兼容', status: '已放弃', note: '市场份额低于1%' },
      { name: 'Flash', status: '已废弃', note: '技术已淘汰' },
      { name: 'Moment.js', status: '替换为Day.js', note: '体积过大' },
      { name: 'Create React App', status: '替换为Vite', note: '官方不再推荐' }
    ]
  }
]

const timeline = [
  { year: '2020', events: ['学习React', '掌握TypeScript'] },
  { year: '2021', events: ['深入Webpack', '接触Node.js'] },
  { year: '2022', events: ['开源贡献', '性能优化实践'] },
  { year: '2023', events: ['AI工程化', '全栈开发'] },
  { year: '2024', events: ['WebAssembly', '边缘计算探索'] }
]

export function useRadar() {
  const selectedItem = ref<RadarTechItem | null>(null)
  let radarChart: echarts.ECharts | null = null

  const initChart = async () => {
    await nextTick()
    const chartDom = document.getElementById('radarChart')
    if (!chartDom) return

    // 如果已有实例先销毁，避免重复初始化
    if (radarChart) {
      radarChart.dispose()
    }

    radarChart = echarts.init(chartDom)

    const categories = ['前端框架', '构建工具', 'CSS方案', '状态管理', '服务端', '测试工具']
    const values = [95, 90, 92, 85, 88, 80]

    radarChart.setOption({
      animation: false,
      tooltip: { trigger: 'item' },
      radar: {
        name: { textStyle: { color: '#666', fontSize: 14 } },
        indicator: categories.map(cat => ({ name: cat, max: 100 })),
        radius: '65%',
        splitNumber: 4,
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        splitLine: { lineStyle: { color: '#e5e7eb' } },
        splitArea: {
          areaStyle: { color: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db'] }
        }
      },
      series: [{
        type: 'radar',
        data: [{
          value: values,
          name: '技术覆盖度',
          areaStyle: { color: 'rgba(59, 130, 246, 0.3)' },
          lineStyle: { color: '#3b82f6', width: 2 },
          itemStyle: { color: '#3b82f6' }
        }]
      }]
    })
  }

  const handleResize = () => {
    radarChart?.resize()
  }

  onMounted(() => {
    initChart()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    radarChart?.dispose()
    radarChart = null
    window.removeEventListener('resize', handleResize)
  })

  return {
    radarSections,
    timeline,
    selectedItem
  }
}
