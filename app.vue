<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  }
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>