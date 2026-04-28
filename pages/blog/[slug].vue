<script setup lang="ts">
const route = useRoute()

const { data: post, error } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent(route.path).findOne()
)

if (error.value || !post.value) {
  throw createError({ statusCode: 404, message: '文章未找到' })
}

const p = post.value!

useHead({
  title: `${p.title} - TechPortfolio`,
  meta: [
    { name: 'description', content: p.description || '' },
    { property: 'og:title', content: p.title },
    { property: 'og:description', content: p.description || '' },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: p.date || '' },
    { property: 'article:tag', content: (p.tags as string[])?.join(',') || '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        author: { '@type': 'Person', name: 'TechPortfolio' }
      })
    }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-4xl">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
      >
        <i class="fas fa-arrow-left mr-2"></i> 返回博客列表
      </NuxtLink>

      <div class="mb-8">
        <div class="flex items-center gap-4 mb-4">
          <span
            v-if="p.category"
            class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
          >
            {{ p.category }}
          </span>
          <span class="text-sm text-gray-500">{{ p.date }}</span>
        </div>
        <h1 class="text-4xl font-bold mb-4">{{ p.title }}</h1>
        <p v-if="p.description" class="text-xl text-gray-600">
          {{ p.description }}
        </p>
        <div v-if="p.tags" class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in (p.tags as string[])"
            :key="tag"
            class="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <div class="blog-content">
        <ContentRenderer :value="p" />
      </div>

      <div class="border-t mt-12 pt-8">
        <h3 class="text-lg font-semibold mb-4">分享这篇文章</h3>
        <div class="flex gap-4">
          <a
            :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(String(p.title))}`"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-blue-600"
          >
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a
            :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(useRequestURL().href)}`"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-blue-600"
          >
            <i class="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(pre) {
  @apply bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto text-sm;
}
:deep(code) {
  @apply font-mono;
}
:deep(h2) {
  @apply text-2xl font-bold mt-8 mb-4;
}
:deep(h3) {
  @apply text-xl font-semibold mt-6 mb-3;
}
:deep(p) {
  @apply mb-4 leading-relaxed;
}
:deep(ul), :deep(ol) {
  @apply mb-4 pl-6;
}
:deep(li) {
  @apply mb-1;
}
:deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4;
}
:deep(table) {
  @apply w-full border-collapse mb-4;
}
:deep(th), :deep(td) {
  @apply border border-gray-300 px-4 py-2 text-left;
}
:deep(th) {
  @apply bg-gray-100 font-semibold;
}
</style>
