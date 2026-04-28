<script setup lang="ts">
const { categories, activeCategory, filteredProjects } = useProjects()

useHead({
  title: '项目档案馆 - TechPortfolio',
  meta: [
    { name: 'description', content: '展示我的技术项目实践，包括前端性能优化、AI工程化、数据可视化等领域的深度项目经验。' }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">项目档案馆</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          每个项目都是一次技术探索的旅程，记录着挑战、思考与成长。
          从需求分析到技术选型，从问题解决到成果交付。
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="[
            'px-4 py-2 rounded-full text-sm transition-colors',
            activeCategory === cat
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 项目列表 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        >
          <!-- 项目头部 -->
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
              <span class="text-sm text-gray-500">{{ project.timeline }} · {{ project.role }}</span>
            </div>
            <span
              :class="{
                'bg-green-100 text-green-800': project.badgeColor === 'green',
                'bg-purple-100 text-purple-800': project.badgeColor === 'purple',
                'bg-blue-100 text-blue-800': project.badgeColor === 'blue',
                'bg-orange-100 text-orange-800': project.badgeColor === 'orange'
              }"
              class="px-3 py-1 rounded-full text-sm whitespace-nowrap"
            >
              {{ project.badge }}
            </span>
          </div>

          <!-- 项目描述 -->
          <p class="text-gray-600 mb-4">{{ project.description }}</p>

          <!-- 技术选型 -->
          <div class="mb-4">
            <h3 class="text-sm font-medium mb-2 text-gray-700">技术选型</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techs"
                :key="tech"
                class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 关键指标 -->
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 class="text-sm font-medium mb-3 text-gray-700">关键指标</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="metric in project.metrics" :key="metric.label" class="text-center">
                <div class="text-lg font-bold text-blue-600">{{ metric.value }}</div>
                <div class="text-xs text-gray-500">{{ metric.label }}</div>
              </div>
            </div>
          </div>

          <!-- 挑战与解决方案 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 class="text-sm font-medium mb-2 text-red-600">
                <i class="fas fa-exclamation-circle mr-1"></i> 挑战
              </h3>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="challenge in project.challenges" :key="challenge">• {{ challenge }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2 text-green-600">
                <i class="fas fa-check-circle mr-1"></i> 解决方案
              </h3>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="solution in project.solutions" :key="solution">• {{ solution }}</li>
              </ul>
            </div>
          </div>

          <!-- 链接 -->
          <div class="flex gap-4 pt-4 border-t border-gray-200">
            <a
              v-if="project.links.github"
              :href="project.links.github"
              target="_blank"
              class="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              <i class="fab fa-github mr-1"></i> GitHub
            </a>
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              class="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              <i class="fas fa-external-link-alt mr-1"></i> Demo
            </a>
            <a
              v-if="project.links.npm"
              :href="project.links.npm"
              target="_blank"
              class="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              <i class="fab fa-npm mr-1"></i> NPM
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
</style>
