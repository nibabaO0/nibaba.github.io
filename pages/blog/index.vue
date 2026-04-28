<script setup lang="ts">
// 获取博客列表
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

useHead({
  title: '技术博客 - TechPortfolio',
  meta: [
    { name: 'description', content: '技术博客 - 分享前端性能优化、AI工程化、数据可视化等领域的技术实践与思考。' }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-4xl">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">技术博客</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          记录技术实践中的思考与总结，涵盖前端性能优化、AI工程化、数据可视化等领域。
        </p>
      </div>

      <!-- 博客列表 -->
      <div v-if="posts && posts.length > 0" class="space-y-8">
        <article
          v-for="post in posts"
          :key="post._path"
          class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        >
          <NuxtLink :to="post._path">
            <!-- 分类和日期 -->
            <div class="flex items-center gap-4 mb-3">
              <span
                v-if="post.category"
                class="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {{ post.category }}
              </span>
              <span class="text-sm text-gray-500">{{ post.date }}</span>
            </div>

            <!-- 标题 -->
            <h2 class="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
              {{ post.title }}
            </h2>

            <!-- 描述 -->
            <p v-if="post.description" class="text-gray-600 mb-4">
              {{ post.description }}
            </p>

            <!-- 标签 -->
            <div v-if="post.tags" class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                #{{ tag }}
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-20">
        <i class="fas fa-pen-fancy text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray-500">博客文章正在撰写中，敬请期待...</p>
      </div>
    </div>
  </div>
</template>
