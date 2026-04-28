<script setup lang="ts">
useHead({
  title: 'API 文档 - TechPortfolio',
  meta: [
    { name: 'description', content: 'TechPortfolio RESTful API 文档 - 博客统计、项目管理、健康检查等接口' }
  ]
})

const apis = [
  {
    method: 'GET',
    path: '/api/health',
    description: '健康检查和博客统计',
    response: `{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "stats": {
    "totalPosts": 43,
    "totalProjects": 15,
    "openSourceContributions": 127,
    ...
  }
}`
  },
  {
    method: 'GET',
    path: '/api/stats',
    description: '访问统计和页面分析',
    params: [
      { name: 'type', type: 'string', description: '可选: visitors | pages' }
    ],
    response: `{
  "visitors": { "online": 8, "list": [...] },
  "pageViews": { "total": 4190, "pages": [...] },
  "techStats": {
    "topCategories": [...],
    "totalWords": 125000
  }
}`
  },
  {
    method: 'GET',
    path: '/api/projects',
    description: '项目列表',
    params: [
      { name: 'category', type: 'string', description: '可选: performance | ai | visualization' }
    ],
    response: `[{
  "id": 1,
  "title": "电商平台性能优化",
  "category": "performance",
  "techStack": ["React", "Webpack", ...],
  "metrics": { "fcp": "0.5s", ... }
}]`
  }
]
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">API 文档</h1>
        <p class="text-gray-600">
          TechPortfolio 提供 RESTful API 接口，用于获取博客统计、项目数据和实时访问信息。
        </p>
      </div>

      <div class="space-y-8">
        <div
          v-for="api in apis"
          :key="api.path"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <div class="flex items-center gap-4 px-6 py-4 bg-gray-50 border-b">
            <span
              :class="{
                'bg-green-100 text-green-800': api.method === 'GET',
                'bg-blue-100 text-blue-800': api.method === 'POST',
                'bg-yellow-100 text-yellow-800': api.method === 'PUT',
                'bg-red-100 text-red-800': api.method === 'DELETE'
              }"
              class="px-3 py-1 rounded text-sm font-mono font-bold"
            >
              {{ api.method }}
            </span>
            <code class="text-gray-800 font-mono">{{ api.path }}</code>
          </div>

          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ api.description }}</p>

            <div v-if="api.params" class="mb-4">
              <h4 class="text-sm font-medium text-gray-700 mb-2">参数</h4>
              <div class="bg-gray-50 rounded-lg p-3">
                <div
                  v-for="param in api.params"
                  :key="param.name"
                  class="flex items-center gap-3 text-sm mb-1"
                >
                  <code class="text-blue-600">{{ param.name }}</code>
                  <span class="text-gray-500">{{ param.type }}</span>
                  <span class="text-gray-400">- {{ param.description }}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-sm font-medium text-gray-700 mb-2">响应示例</h4>
              <pre class="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm font-mono">{{ api.response }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
