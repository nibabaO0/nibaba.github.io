// 项目列表API

const projects = [
  {
    id: 1,
    title: '电商平台性能优化',
    category: 'performance',
    description: '通过 Webpack 优化、懒加载、CDN 加速等技术手段，将首屏加载时间从 5s 优化至 0.5s',
    techStack: ['React', 'Webpack', 'CDN', 'Lazy Loading'],
    metrics: { fcp: '0.5s', bundleSize: '-60%', lighthouse: 95 },
    timeline: '2023.06 - 2023.09',
    github: 'https://github.com/example/ecommerce-optimization',
    demo: 'https://demo.example.com'
  },
  {
    id: 2,
    title: 'AI 模型部署平台',
    category: 'ai',
    description: '构建高性能的 AI 模型推理服务，支持实时预测和批量处理',
    techStack: ['TensorFlow', 'FastAPI', 'Docker', 'Kubernetes'],
    metrics: { latency: '<50ms', qps: '1000', deployTime: '<5min' },
    timeline: '2023.10 - 2024.02',
    github: 'https://github.com/example/ai-deployment',
    demo: 'https://ai-demo.example.com'
  },
  {
    id: 3,
    title: '实时数据可视化系统',
    category: 'visualization',
    description: '基于WebSocket的实时数据可视化平台，支持多维度数据监控和告警',
    techStack: ['Vue.js', 'WebSocket', 'ECharts', 'Grafana'],
    metrics: { latency: '<100ms', dimensions: '20+', alertResponse: '<30s' },
    timeline: '2024.03 - 2024.06',
    github: 'https://github.com/example/realtime-visualization',
    demo: 'https://monitor.example.com'
  }
]

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const id = getRouterParam(event, 'id')

  // 单个项目
  if (id) {
    const project = projects.find(p => p.id === Number(id))
    if (!project) {
      throw createError({ statusCode: 404, message: 'Project not found' })
    }
    return project
  }

  // 分类筛选
  if (query.category) {
    return projects.filter(p => p.category === query.category)
  }

  return projects
})
