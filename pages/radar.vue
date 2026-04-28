<script setup lang="ts">
const { radarSections, timeline, selectedItem } = useRadar()

useHead({
  title: '技术雷达 - TechPortfolio',
  meta: [
    { name: 'description', content: '技术雷达 - 展示我当前关注和采用的技术栈，包括采纳、试验、评估和暂缓四个层次。' }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">技术雷达</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          技术雷达帮助我追踪和评估新兴技术，合理规划技术投资。
          采用 ThoughtWorks 技术雷达的四环模型：采纳、试验、评估、暂缓。
        </p>
      </div>

      <!-- 雷达图和说明 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- 雷达图 -->
        <div class="bg-white border border-gray-200 rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-4 text-center">技术覆盖度</h3>
          <div id="radarChart" class="w-full h-80"></div>
        </div>

        <!-- 时间线 -->
        <div class="bg-white border border-gray-200 rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-4">技术成长时间线</h3>
          <div class="space-y-6">
            <div
              v-for="item in timeline"
              :key="item.year"
              class="flex items-start"
            >
              <div class="w-16 text-right pr-4">
                <span class="font-semibold text-blue-600">{{ item.year }}</span>
              </div>
              <div class="flex-1 border-l-2 border-blue-200 pl-4 pb-2">
                <div
                  v-for="event in item.events"
                  :key="event"
                  class="mb-1 text-sm text-gray-600"
                >
                  • {{ event }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技术雷达四环 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="section in radarSections"
          :key="section.ring"
          :class="[
            'bg-white border rounded-xl p-6',
            section.color === 'green' ? 'border-green-200 bg-green-50/30' : '',
            section.color === 'yellow' ? 'border-yellow-200 bg-yellow-50/30' : '',
            section.color === 'orange' ? 'border-orange-200 bg-orange-50/30' : '',
            section.color === 'red' ? 'border-red-200 bg-red-50/30' : ''
          ]"
        >
          <!-- 区域头部 -->
          <div class="flex items-center mb-4">
            <div
              :class="[
                'w-4 h-4 rounded-full mr-3',
                section.color === 'green' ? 'bg-green-500' : '',
                section.color === 'yellow' ? 'bg-yellow-500' : '',
                section.color === 'orange' ? 'bg-orange-500' : '',
                section.color === 'red' ? 'bg-red-500' : ''
              ]"
            />
            <h3 class="text-lg font-semibold">{{ section.title }}</h3>
          </div>
          <p class="text-sm text-gray-500 mb-4">{{ section.description }}</p>

          <!-- 技术列表 -->
          <div class="space-y-3">
            <div
              v-for="item in section.items"
              :key="item.name"
              class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition cursor-pointer"
              @click="selectedItem = item"
            >
              <div>
                <span class="font-medium">{{ item.name }}</span>
                <span class="text-xs text-gray-500 ml-2">{{ item.status }}</span>
              </div>
              <i class="fas fa-chevron-right text-gray-400 text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 选中技术详情弹窗 -->
      <div
        v-if="selectedItem"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="selectedItem = null"
      >
        <div class="bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl">
          <h4 class="text-lg font-semibold mb-2">{{ selectedItem.name }}</h4>
          <p class="text-sm text-gray-600 mb-4">{{ selectedItem.note }}</p>
          <button
            @click="selectedItem = null"
            class="btn-primary w-full"
          >
            关闭
          </button>
        </div>
      </div>

      <!-- 技术选型原则 -->
      <div class="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 class="text-2xl font-bold mb-6 text-center">技术选型原则</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h4 class="font-semibold mb-2">
              <i class="fas fa-check-circle text-green-500 mr-2"></i>
              问题驱动
            </h4>
            <p class="text-sm text-gray-600">
              技术选型首先要明确要解决的问题，而非盲目追求新技术。
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h4 class="font-semibold mb-2">
              <i class="fas fa-balance-scale text-blue-500 mr-2"></i>
              权衡取舍
            </h4>
            <p class="text-sm text-gray-600">
              每个技术都有优缺点，关键是找到最适合当前场景的方案。
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h4 class="font-semibold mb-2">
              <i class="fas fa-users text-purple-500 mr-2"></i>
              团队能力
            </h4>
            <p class="text-sm text-gray-600">
              考虑团队现有技能和学习成本，平衡技术先进性和落地可行性。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radar-ring {
  transition: all 0.3s ease;
}

.radar-ring:hover {
  transform: translateY(-2px);
}
</style>
