<script setup lang="ts">
// 个人信息
const profile = {
  name: '陈实真',
  title: '前端工程师 / AI工程化研究员',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
  bio: '5年+前端开发经验，专注性能优化与AI工程化实践。从初级开发者成长为技术专家，热爱开源贡献和技术分享。',
  location: '福州',
  email: 'contact@example.com',
  github: 'https://github.com/example',
  linkedin: 'https://linkedin.com/in/example',
  twitter: 'https://twitter.com/example'
}

// 技术技能
const skills = [
  { category: '前端开发', items: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 92 },
    { name: 'Vue.js', level: 88 },
    { name: 'HTML/CSS', level: 95 }
  ]},
  { category: '后端开发', items: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'FastAPI', level: 75 },
    { name: 'Express', level: 82 }
  ]},
  { category: 'AI/ML', items: [
    { name: 'TensorFlow', level: 75 },
    { name: 'PyTorch', level: 70 },
    { name: '模型部署', level: 80 },
    { name: 'Prompt Engineering', level: 85 }
  ]},
  { category: '工具与平台', items: [
    { name: 'Git/GitHub', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'CI/CD', level: 85 },
    { name: 'Kubernetes', level: 65 }
  ]}
]

// 工作经历
const experiences = [
  {
    company: '某互联网大厂',
    position: '高级前端工程师',
    period: '2022.06 - 至今',
    description: '负责核心电商平台的前端架构设计和性能优化，主导React技术栈迁移，推动前端工程化建设。',
    achievements: [
      '首屏加载性能提升90%，用户转化率提高15%',
      '建立前端监控体系，问题发现时间缩短80%',
      '培养3名初级工程师，团队代码质量显著提升'
    ]
  },
  {
    company: '某AI创业公司',
    position: '全栈工程师',
    period: '2020.03 - 2022.05',
    description: '参与AI模型推理平台开发，负责前后端架构设计和模型部署流程优化。',
    achievements: [
      '构建高性能推理服务，QPS从100提升至1000',
      '实现自动化部署流程，部署时间从1小时缩短至5分钟',
      '开源贡献TensorFlow部署工具包，获得200+ GitHub Stars'
    ]
  },
  {
    company: '某科技公司',
    position: '前端开发工程师',
    period: '2019.07 - 2020.02',
    description: '负责数据可视化平台开发，使用Vue.js和ECharts构建实时监控系统。',
    achievements: [
      '独立完成监控平台前端架构，支持20+数据维度',
      'WebSocket实时推送延迟控制在100ms以内',
      '编写技术博客10篇，累计阅读量超过5万'
    ]
  }
]

// 教育经历
const education = {
  school: '某知名大学',
  degree: '计算机科学与技术 · 本科',
  period: '2015.09 - 2019.06',
  highlights: ['校级优秀毕业生', 'ACM竞赛省级二等奖', '担任技术社团负责人']
}

// 开源贡献
const openSource = [
  { name: 'React性能工具', stars: 200, prs: 27, description: 'React Profiler增强插件' },
  { name: 'Webpack优化指南', stars: 150, prs: 12, description: 'Webpack最佳实践文档' },
  { name: 'TypeScript类型库', stars: 100, prs: 8, description: '常用TS类型定义集合' }
]

// 成长历程
const journey = [
  { phase: '入门阶段', period: '2019', description: '掌握基础前端技能，学会Vue.js开发' },
  { phase: '成长阶段', period: '2020-2021', description: '深入React、TypeScript，接触后端开发' },
  { phase: '专家阶段', period: '2022-2023', description: '性能优化专家，AI工程化实践' },
  { phase: '沉淀阶段', period: '2024', description: '开源贡献，技术分享，持续学习' }
]

// SEO
useHead({
  title: '关于我 - TechPortfolio',
  meta: [
    { name: 'description', content: '张三 - 前端工程师/AI工程化研究员，5年+开发经验，专注性能优化与AI模型部署。' }
  ]
})
</script>

<template>
  <div class="py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- 个人简介卡片 -->
      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-12">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <!-- 头像 -->
          <div class="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
            <img
              :src="profile.avatar"
              alt="头像"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- 基本信息 -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-bold mb-2">{{ profile.name }}</h1>
            <p class="text-xl text-gray-600 mb-4">{{ profile.title }}</p>
            <p class="text-gray-600 mb-6 max-w-xl">{{ profile.bio }}</p>

            <!-- 联系方式 -->
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <a :href="profile.github" target="_blank" class="flex items-center text-gray-600 hover:text-blue-600">
                <i class="fab fa-github mr-2"></i> GitHub
              </a>
              <a :href="profile.linkedin" target="_blank" class="flex items-center text-gray-600 hover:text-blue-600">
                <i class="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a :href="profile.twitter" target="_blank" class="flex items-center text-gray-600 hover:text-blue-600">
                <i class="fab fa-twitter mr-2"></i> Twitter
              </a>
              <span class="flex items-center text-gray-600">
                <i class="fas fa-envelope mr-2"></i> {{ profile.email }}
              </span>
              <span class="flex items-center text-gray-600">
                <i class="fas fa-map-marker-alt mr-2"></i> {{ profile.location }}
              </span>
            </div>
          </div>

          <!-- 快速链接 -->
          <div class="flex flex-col gap-3">
            <NuxtLink to="/resume" class="btn-primary text-center">
              查看简历
            </NuxtLink>
            <NuxtLink to="/projects" class="btn-secondary text-center">
              项目档案
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 技术技能 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-8">技术技能</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="skillGroup in skills"
            :key="skillGroup.category"
            class="bg-white border border-gray-200 rounded-xl p-6"
          >
            <h3 class="font-semibold mb-4 text-blue-600">{{ skillGroup.category }}</h3>
            <div class="space-y-4">
              <div v-for="skill in skillGroup.items" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-sm">{{ skill.name }}</span>
                  <span class="text-sm font-medium">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${skill.level}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-8">工作经历</h2>
        <div class="space-y-6">
          <div
            v-for="exp in experiences"
            :key="exp.company"
            class="bg-white border border-gray-200 rounded-xl p-6"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold">{{ exp.company }}</h3>
                <p class="text-gray-600">{{ exp.position }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ exp.period }}</span>
            </div>
            <p class="text-gray-600 mb-4">{{ exp.description }}</p>
            <div>
              <h4 class="font-medium mb-2 text-sm text-gray-700">主要成就</h4>
              <ul class="space-y-1">
                <li v-for="achievement in exp.achievements" :key="achievement" class="text-sm text-gray-600">
                  <i class="fas fa-check text-green-500 mr-2"></i>{{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 教育经历 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-8">教育经历</h2>
        <div class="bg-white border border-gray-200 rounded-xl p-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold">{{ education.school }}</h3>
              <p class="text-gray-600">{{ education.degree }}</p>
            </div>
            <span class="text-sm text-gray-500">{{ education.period }}</span>
          </div>
          <div class="flex gap-4">
            <span
              v-for="highlight in education.highlights"
              :key="highlight"
              class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
            >
              {{ highlight }}
            </span>
          </div>
        </div>
      </div>

      <!-- 开源贡献 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-8">开源贡献</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="project in openSource"
            :key="project.name"
            class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 class="font-semibold mb-2">{{ project.name }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex gap-4 text-sm">
              <span class="flex items-center text-gray-600">
                <i class="fas fa-star text-yellow-500 mr-1"></i> {{ project.stars }}
              </span>
              <span class="flex items-center text-gray-600">
                <i class="fas fa-code-branch text-green-500 mr-1"></i> {{ project.prs }} PRs
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 成长历程 -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 class="text-2xl font-bold mb-8 text-center">技术成长路线图</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="(stage, index) in journey"
            :key="stage.phase"
            class="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div class="text-2xl font-bold text-blue-600 mb-2">{{ index + 1 }}</div>
            <h3 class="font-semibold mb-1">{{ stage.phase }}</h3>
            <p class="text-sm text-gray-500 mb-2">{{ stage.period }}</p>
            <p class="text-sm text-gray-600">{{ stage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>