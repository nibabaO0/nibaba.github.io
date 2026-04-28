// 项目数据与分类过滤逻辑

export interface Project {
  id: number
  title: string
  category: string
  badge: string
  badgeColor: 'green' | 'purple' | 'blue' | 'orange'
  description: string
  techs: string[]
  metrics: { label: string; value: string; improvement: string }[]
  timeline: string
  role: string
  challenges: string[]
  solutions: string[]
  links: {
    github?: string
    demo?: string
    npm?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: '电商平台性能优化',
    category: '性能优化',
    badge: '性能提升 90%',
    badgeColor: 'green',
    description: '通过 Webpack 优化、懒加载、CDN 加速等技术手段，将首屏加载时间从 5s 优化至 0.5s，显著提升用户体验和转化率。',
    techs: ['React', 'Webpack', 'CDN', 'Lazy Loading', 'Code Splitting'],
    metrics: [
      { label: '首屏加载', value: '0.5s', improvement: '从5s' },
      { label: '资源体积', value: '-60%', improvement: '减少' },
      { label: 'FCP', value: '1.2s', improvement: '优化' },
      { label: 'LCP', value: '2.1s', improvement: '优化' }
    ],
    timeline: '2023.06 - 2023.09',
    role: '前端架构师',
    challenges: [
      '大型SPA应用首屏加载慢',
      '图片资源体积过大',
      '第三方库依赖冗余'
    ],
    solutions: [
      'Webpack配置优化，实现代码分割',
      '图片懒加载 + WebP格式转换',
      'CDN分发 + Gzip压缩'
    ],
    links: {
      github: 'https://github.com/example/ecommerce-optimization',
      demo: 'https://demo.example.com'
    }
  },
  {
    id: 2,
    title: 'AI 模型部署平台',
    category: 'AI工程化',
    badge: 'AI 工程化',
    badgeColor: 'purple',
    description: '构建高性能的 AI 模型推理服务，支持实时预测和批量处理，实现模型版本管理和自动化部署。',
    techs: ['TensorFlow', 'FastAPI', 'Docker', 'Kubernetes', 'Redis'],
    metrics: [
      { label: '推理延迟', value: '<50ms', improvement: '优化' },
      { label: '吞吐量', value: '1000 QPS', improvement: '达到' },
      { label: '模型部署', value: '<5min', improvement: '自动化' }
    ],
    timeline: '2023.10 - 2024.02',
    role: 'AI工程师',
    challenges: [
      '模型推理延迟过高',
      'GPU资源利用率低',
      '部署流程繁琐'
    ],
    solutions: [
      '模型量化 + TensorRT加速',
      '动态批处理 + GPU池化',
      'CI/CD自动化部署流水线'
    ],
    links: {
      github: 'https://github.com/example/ai-deployment',
      demo: 'https://ai-demo.example.com'
    }
  },
  {
    id: 3,
    title: '实时数据可视化系统',
    category: '数据可视化',
    badge: 'WebSocket',
    badgeColor: 'blue',
    description: '基于WebSocket的实时数据可视化平台，支持多维度数据监控和告警，集成Grafana仪表盘。',
    techs: ['Vue.js', 'WebSocket', 'ECharts', 'Grafana', 'Node.js'],
    metrics: [
      { label: '实时延迟', value: '<100ms', improvement: '达到' },
      { label: '数据维度', value: '20+', improvement: '支持' },
      { label: '告警响应', value: '<30s', improvement: '自动化' }
    ],
    timeline: '2024.03 - 2024.06',
    role: '全栈工程师',
    challenges: [
      '高并发实时数据推送',
      '大量数据点渲染性能',
      '告警规则配置复杂'
    ],
    solutions: [
      'WebSocket连接池 + 心跳机制',
      '数据聚合 + Canvas渲染优化',
      '可配置告警规则引擎'
    ],
    links: {
      github: 'https://github.com/example/realtime-visualization',
      demo: 'https://monitor.example.com'
    }
  },
  {
    id: 4,
    title: '开源贡献：React性能工具',
    category: '开源贡献',
    badge: 'Open Source',
    badgeColor: 'orange',
    description: '为React生态贡献性能分析工具，帮助开发者识别组件渲染瓶颈，累计被50+项目使用。',
    techs: ['React', 'TypeScript', 'Chrome DevTools', 'Webpack'],
    metrics: [
      { label: 'PRs Merged', value: '27', improvement: '贡献' },
      { label: '项目引用', value: '50+', improvement: '被使用' },
      { label: '下载量', value: '10K+/月', improvement: 'NPM' }
    ],
    timeline: '2022.01 - 持续',
    role: '开源贡献者',
    challenges: [
      'React组件性能分析困难',
      '开发者工具集成复杂',
      '跨版本兼容性维护'
    ],
    solutions: [
      '开发React Profiler增强插件',
      'Chrome DevTools API集成',
      '自动化版本兼容测试'
    ],
    links: {
      github: 'https://github.com/example/react-perf-tool',
      npm: 'https://npmjs.com/package/react-perf-tool'
    }
  }
]

export function useProjects() {
  const categories = ['全部', '性能优化', 'AI工程化', '数据可视化', '开源贡献']
  const activeCategory = ref('全部')

  const filteredProjects = computed(() => {
    if (activeCategory.value === '全部') return projects
    return projects.filter(p => p.category === activeCategory.value)
  })

  return {
    projects,
    categories,
    activeCategory,
    filteredProjects
  }
}
