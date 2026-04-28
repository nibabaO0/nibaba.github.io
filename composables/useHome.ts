// 首页数据与 ECharts 雷达图逻辑

import * as echarts from 'echarts'

const techStats = [
  { name: 'JavaScript', value: 95 },
  { name: 'TypeScript', value: 90 },
  { name: 'React', value: 92 },
  { name: 'Node.js', value: 85 },
  { name: 'Python', value: 80 },
  { name: 'AI/ML', value: 75 }
]

const featuredProjects = [
  {
    title: '电商平台性能优化',
    badge: '性能提升 90%',
    badgeColor: 'green',
    description: '通过 Webpack 优化、懒加载、CDN 加速等技术手段，将首屏加载时间从 5s 优化至 0.5s',
    techs: ['React', 'Webpack', 'CDN'],
    metrics: [
      { label: '首屏加载', value: '0.5s', color: 'green' },
      { label: '资源体积', value: '减少 60%', color: 'green' }
    ]
  },
  {
    title: 'AI 模型部署平台',
    badge: 'AI 工程化',
    badgeColor: 'purple',
    description: '构建高性能的 AI 模型推理服务，支持实时预测和批量处理',
    techs: ['TensorFlow', 'FastAPI', 'Docker'],
    note: '模型量化过程中精度损失问题的解决方案'
  }
]

const radarData = {
  adopt: ['React 18+', 'TypeScript', 'Tailwind CSS'],
  trial: ['WebAssembly', 'RSC', 'AI Agents'],
  assess: ['Deno', 'Zig', 'WebGPU'],
  hold: ['jQuery', 'IE 兼容', 'Flash']
}

const stats = [
  { label: '开源贡献', value: '127', color: 'blue', percent: 85 },
  { label: '技术博客', value: '43', color: 'purple', percent: 72 },
  { label: '项目经验', value: '5年+', color: 'green', percent: 90 }
]

export function useHome() {
  const heatmapDots = ref<{ x: number; y: number; intensity: number }[]>([])
  const showHeatmap = ref(false)

  let radarChart: echarts.ECharts | null = null

  const initRadarChart = async () => {
    await nextTick()
    const chartDom = document.getElementById('homeRadarChart')
    if (!chartDom) return

    radarChart = echarts.init(chartDom)

    radarChart.setOption({
      animation: false,
      tooltip: { trigger: 'item' },
      legend: {
        data: ['我的技能'],
        bottom: 0,
        textStyle: { color: '#666' }
      },
      radar: {
        name: { textStyle: { color: '#666', fontSize: 12 } },
        indicator: techStats.map(item => ({ name: item.name, max: 100 })),
        radius: '60%',
        axisLine: { lineStyle: { color: '#e5e7eb' } },
        splitLine: { lineStyle: { color: '#e5e7eb' } },
        splitArea: { areaStyle: { color: ['#f3f4f6', '#e5e7eb'] } }
      },
      series: [{
        name: '技能熟练度',
        type: 'radar',
        data: [{
          value: techStats.map(item => item.value),
          name: '我的技能',
          areaStyle: { color: 'rgba(59, 130, 246, 0.4)' },
          lineStyle: { color: '#3b82f6', width: 2 },
          itemStyle: { color: '#3b82f6' }
        }]
      }]
    })
  }

  const generateHeatmapDots = () => {
    const container = document.querySelector('.hero-section')
    if (!container) return
    const rect = container.getBoundingClientRect()
    const count = Math.floor(Math.random() * 5) + 5
    const dots = []
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        intensity: Math.random()
      })
    }
    heatmapDots.value = dots
  }

  const handleResize = () => {
    radarChart?.resize()
  }

  let heatmapInterval: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    initRadarChart()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    radarChart?.dispose()
    if (heatmapInterval) {
      clearInterval(heatmapInterval)
    }
  })

  const toggleHeatmap = (enabled: boolean) => {
    showHeatmap.value = enabled
    if (enabled) {
      generateHeatmapDots()
      heatmapInterval = setInterval(generateHeatmapDots, 5000)
    } else {
      if (heatmapInterval) {
        clearInterval(heatmapInterval)
        heatmapInterval = null
      }
    }
  }

  return {
    techStats,
    featuredProjects,
    radarData,
    stats,
    heatmapDots,
    showHeatmap,
    toggleHeatmap
  }
}
