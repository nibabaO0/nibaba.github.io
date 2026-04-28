<script setup lang="ts">
const { featuredProjects, radarData, stats, heatmapDots, showHeatmap, toggleHeatmap } = useHome()

useHead({
  title: 'TechPortfolio - 个人技术博客',
  meta: [
    { name: 'description', content: '专注前端性能优化与AI工程化实践的个人技术博客，记录技术探索与项目经验。' }
  ]
})
</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section relative py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧内容 -->
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            深耕前端性能与<br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI 工程化
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            专注解决实际业务痛点，通过技术创新驱动产品性能提升<br>
            从5s到0.5s的首屏优化实践者
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/projects" class="btn-primary whitespace-nowrap">
              查看项目档案
            </NuxtLink>
            <NuxtLink to="/blog" class="btn-secondary whitespace-nowrap">
              技术博客
            </NuxtLink>
          </div>
        </div>

        <!-- 右侧雷达图 -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
          <h3 class="text-xl font-semibold mb-6 text-center">技术栈熟练度</h3>
          <client-only>
            <div id="homeRadarChart" class="w-full h-80"></div>
          </client-only>
        </div>
      </div>

      <!-- 热力图层 (可选显示) -->
      <div v-if="showHeatmap && heatmapDots.length > 0" class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="(dot, index) in heatmapDots" :key="index" class="heatmap-dot" :style="{
          left: `${dot.x}px`,
          top: `${dot.y}px`,
          opacity: dot.intensity * 0.5 + 0.3
        }" />
      </div>
    </div>

    <!-- 热力图开关 -->
    <button v-if="!showHeatmap" @click="toggleHeatmap(true)"
      class="absolute bottom-4 right-4 text-xs text-gray-500 hover:text-gray-700 bg-white/80 px-2 py-1 rounded">
      <i class="fas fa-fire mr-1"></i> 启用热力图
    </button>
    <button v-else @click="toggleHeatmap(false)"
      class="absolute bottom-4 right-4 text-xs text-gray-500 hover:text-gray-700 bg-white/80 px-2 py-1 rounded">
      <i class="fas fa-eye-slash mr-1"></i> 关闭热力图
    </button>
  </section>

  <!-- Value Proposition Strip -->
  <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold text-white mb-8 text-center">求职锦囊</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <NuxtLink to="/about"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer block">
          <h3 class="text-white font-semibold mb-3">我的技术成长路线图</h3>
          <p class="text-blue-100 text-sm">从初级开发者到技术专家的成长轨迹与心得体会</p>
        </NuxtLink>
        <NuxtLink to="/projects"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer block">
          <h3 class="text-white font-semibold mb-3">BAT Offer 项目复盘</h3>
          <p class="text-blue-100 text-sm">三个让我成功入职顶级互联网公司的项目深度解析</p>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Main Content Grid -->
  <section class="py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Project Archive -->
        <div class="lg:col-span-2">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">项目档案馆</h2>
            <NuxtLink to="/projects" class="text-blue-600 hover:text-blue-700 text-sm">
              查看全部 <i class="fas fa-arrow-right ml-1"></i>
            </NuxtLink>
          </div>

          <div class="space-y-6">
            <div v-for="project in featuredProjects" :key="project.title" class="card">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold">{{ project.title }}</h3>
                <span :class="{
                  'bg-green-100 text-green-800': project.badgeColor === 'green',
                  'bg-purple-100 text-purple-800': project.badgeColor === 'purple'
                }" class="px-3 py-1 rounded-full text-sm">
                  {{ project.badge }}
                </span>
              </div>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="mb-4">
                <h4 class="font-medium mb-2">技术选型</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.techs" :key="tech" :class="{
                    'bg-blue-100 text-blue-800': project.badgeColor === 'green',
                    'bg-purple-100 text-purple-800': project.badgeColor === 'purple'
                  }" class="px-3 py-1 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div v-if="project.metrics" class="border-t pt-4">
                <h4 class="font-medium mb-2">关键指标</h4>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div v-for="metric in project.metrics" :key="metric.label">
                    <span class="text-gray-500">{{ metric.label }}:</span>
                    <span :class="`text-${metric.color}-600`" class="font-semibold ml-1">{{ metric.value }}</span>
                  </div>
                </div>
              </div>
              <div v-if="project.note" class="border-t pt-4">
                <h4 class="font-medium mb-2">踩坑记录</h4>
                <p class="text-sm text-gray-600">{{ project.note }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Code Lab Preview -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-4">代码实验室</h3>
            <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre class="text-green-400 text-sm font-mono">
// 虚拟列表实现示例
function VirtualList() {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleScroll = useCallback(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    setVisibleItems(items.slice(start, start + visibleCount));
  }, [scrollTop, itemHeight]);

  return (
    &lt;div className="virtual-container"&gt;
      {visibleItems.map(item => (
        &lt;div key={item.id} className="list-item"&gt;
          {item.content}
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}
</pre>
            </div>
            <NuxtLink to="/lab" class="btn-primary w-full mt-4 block text-center">
              查看完整代码
            </NuxtLink>
          </div>

          <!-- Tech Radar -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-4">技术雷达 Q4 2024</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="border rounded-lg p-3 bg-green-50">
                <h4 class="font-medium text-green-800 mb-2">采纳</h4>
                <ul class="space-y-1">
                  <li v-for="item in radarData.adopt" :key="item">• {{ item }}</li>
                </ul>
              </div>
              <div class="border rounded-lg p-3 bg-yellow-50">
                <h4 class="font-medium text-yellow-800 mb-2">试验</h4>
                <ul class="space-y-1">
                  <li v-for="item in radarData.trial" :key="item">• {{ item }}</li>
                </ul>
              </div>
              <div class="border rounded-lg p-3 bg-orange-50">
                <h4 class="font-medium text-orange-800 mb-2">评估</h4>
                <ul class="space-y-1">
                  <li v-for="item in radarData.assess" :key="item">• {{ item }}</li>
                </ul>
              </div>
              <div class="border rounded-lg p-3 bg-red-50">
                <h4 class="font-medium text-red-800 mb-2">暂缓</h4>
                <ul class="space-y-1">
                  <li v-for="item in radarData.hold" :key="item">• {{ item }}</li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/radar" class="btn-secondary w-full mt-4 block text-center">
              查看完整报告
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-4">技术统计</h3>
            <div class="space-y-4">
              <div v-for="stat in stats" :key="stat.label">
                <div class="flex justify-between mb-1">
                  <span class="text-sm">{{ stat.label }}</span>
                  <span class="text-sm font-medium">{{ stat.value }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div :class="`bg-${stat.color}-600`" class="h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${stat.percent}%` }" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 500px;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}

pre::-webkit-scrollbar {
  height: 6px;
}

pre::-webkit-scrollbar-track {
  background: #1f2937;
}

pre::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

.heatmap-dot {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}
</style>
