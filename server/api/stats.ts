// 访问统计API
// 模拟实时访客数据（生产环境应连接WebSocket/Redis）

interface VisitorData {
  id: string
  country: string
  city: string
  page: string
  timestamp: string
  duration: number
}

// 模拟访客数据
const mockVisitors: VisitorData[] = [
  { id: 'v1', country: '中国', city: '北京', page: '/', timestamp: new Date().toISOString(), duration: 120 },
  { id: 'v2', country: '中国', city: '上海', page: '/projects', timestamp: new Date().toISOString(), duration: 85 },
  { id: 'v3', country: '美国', city: 'San Francisco', page: '/lab', timestamp: new Date().toISOString(), duration: 200 },
  { id: 'v4', country: '中国', city: '深圳', page: '/', timestamp: new Date().toISOString(), duration: 45 },
  { id: 'v5', country: '日本', city: '东京', page: '/radar', timestamp: new Date().toISOString(), duration: 150 },
  { id: 'v6', country: '中国', city: '杭州', page: '/about', timestamp: new Date().toISOString(), duration: 90 },
  { id: 'v7', country: '新加坡', city: '新加坡', page: '/projects', timestamp: new Date().toISOString(), duration: 60 },
  { id: 'v8', country: '中国', city: '成都', page: '/', timestamp: new Date().toISOString(), duration: 180 }
]

// 页面访问统计
const pageViews = [
  { page: '/', views: 1520, avgDuration: 180 },
  { page: '/projects', views: 890, avgDuration: 240 },
  { page: '/lab', views: 670, avgDuration: 320 },
  { page: '/radar', views: 450, avgDuration: 200 },
  { page: '/about', views: 380, avgDuration: 150 },
  { page: '/resume', views: 280, avgDuration: 120 }
]

// 技术文章统计
const techStats = {
  topCategories: [
    { name: '性能优化', count: 15 },
    { name: 'AI工程化', count: 12 },
    { name: '前端工程化', count: 10 },
    { name: '数据可视化', count: 6 }
  ],
  totalWords: 125000,
  avgReadTime: '8分钟',
  mostReadPost: '电商平台性能优化实践 - 从5s到0.5s'
}

export default defineEventHandler((event) => {
  const query = getQuery(event)

  // 支持 ?type=visitors 查询实时访客
  if (query.type === 'visitors') {
    return {
      online: mockVisitors.length,
      visitors: mockVisitors
    }
  }

  // 支持 ?type=pages 查询页面统计
  if (query.type === 'pages') {
    return {
      totalViews: pageViews.reduce((sum, p) => sum + p.views, 0),
      pages: pageViews
    }
  }

  // 默认返回完整统计
  return {
    visitors: {
      online: mockVisitors.length,
      list: mockVisitors
    },
    pageViews: {
      total: pageViews.reduce((sum, p) => sum + p.views, 0),
      pages: pageViews
    },
    techStats,
    updatedAt: new Date().toISOString()
  }
})
