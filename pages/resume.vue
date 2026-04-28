<script setup lang="ts">
// 简历视图模式
type ViewMode = 'tech' | 'management'

const activeView = ref<ViewMode>('tech')

const toggleView = (mode: ViewMode) => {
  activeView.value = mode
}

// 基础信息
const baseInfo = {
  name: '陈实真',
  title: '高级前端工程师 / AI工程化研究员',
  email: 'contact@example.com',
  phone: '+86 138-0000-0000',
  location: '北京',
  github: 'https://github.com/example',
  linkedin: 'https://linkedin.com/in/example',
  blog: 'https://your-domain.com',
  summary: '5年+前端开发经验，专注性能优化与AI工程化实践。主导过多个大型项目的前端架构设计和性能优化，累计开源贡献127+ PRs。'
}

// 技术岗技能
const techSkills = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'React/Vue.js', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: '性能优化', level: 90 },
  { name: 'Docker/K8s', level: 75 }
]

// 管理岗技能
const managementSkills = [
  { name: '技术团队管理', level: 85 },
  { name: '项目规划与执行', level: 88 },
  { name: '技术架构设计', level: 90 },
  { name: '跨部门协作', level: 82 },
  { name: '技术招聘与培养', level: 80 },
  { name: '敏捷/Scrum', level: 85 }
]

// 工作经历 - 技术岗视角
const techExperiences = [
  {
    company: '某互联网大厂',
    role: '高级前端工程师',
    period: '2022.06 - 至今',
    highlights: [
      '主导电商平台前端架构升级，React技术栈迁移',
      '首屏加载性能提升90%（5s → 0.5s），用户转化率提高15%',
      '建立前端监控体系，问题发现时间缩短80%',
      '设计并实现组件库，覆盖50+业务组件'
    ],
    stack: ['React', 'TypeScript', 'Webpack', 'Node.js', 'Docker']
  },
  {
    company: '某AI创业公司',
    role: '全栈工程师',
    period: '2020.03 - 2022.05',
    highlights: [
      '构建AI模型推理服务，QPS从100提升至1000',
      '实现自动化CI/CD部署流程，部署时间从1h缩短至5min',
      '开源TensorFlow部署工具包，200+ GitHub Stars',
      '设计RESTful API接口规范，团队协作效率提升30%'
    ],
    stack: ['Python', 'FastAPI', 'TensorFlow', 'Docker', 'Kubernetes']
  },
  {
    company: '某科技公司',
    role: '前端开发工程师',
    period: '2019.07 - 2020.02',
    highlights: [
      '独立完成数据可视化平台前端架构',
      'WebSocket实时推送延迟控制在100ms以内',
      '支持20+数据维度的实时监控面板开发'
    ],
    stack: ['Vue.js', 'ECharts', 'WebSocket', 'SCSS']
  }
]

// 工作经历 - 管理岗视角
const managementExperiences = [
  {
    company: '某互联网大厂',
    role: '高级前端工程师 / 技术Leader',
    period: '2022.06 - 至今',
    highlights: [
      '带领5人前端团队，制定技术规划和目标',
      '推动前端工程化建设，建立代码规范和Review流程',
      '培养3名初级工程师成长为独立开发者',
      '协调产品、设计、后端团队，确保项目按时交付'
    ],
    achievements: '团队代码质量评分从B提升至A，需求交付周期缩短40%'
  },
  {
    company: '某AI创业公司',
    role: '全栈工程师 / 项目负责人',
    period: '2020.03 - 2022.05',
    highlights: [
      '负责AI推理平台的项目规划和资源协调',
      '制定技术方案和开发排期，管理项目风险',
      '对接客户需求，转化为技术方案并推动落地',
      '组织技术分享会，建设团队学习氛围'
    ],
    achievements: '项目提前2周交付，客户满意度95%'
  },
  {
    company: '某科技公司',
    role: '前端开发工程师',
    period: '2019.07 - 2020.02',
    highlights: [
      '独立负责监控平台前端模块的项目管理',
      '与UI/UX设计团队协作建立设计规范',
      '编写技术文档和开发指南'
    ],
    achievements: '技术文档被团队采纳为标准参考'
  }
]

// 开源项目
const openSourceProjects = [
  { name: 'React性能分析工具', stars: 200, description: 'React Profiler增强插件，帮助识别组件渲染瓶颈' },
  { name: 'Webpack优化指南', stars: 150, description: 'Webpack最佳实践文档，15个优化案例' },
  { name: 'TypeScript类型工具库', stars: 100, description: '常用TypeScript类型定义和工具类型' }
]

// 教育背景
const education = {
  school: '某知名大学',
  degree: '计算机科学与技术 · 本科',
  period: '2015.09 - 2019.06',
  gpa: 'GPA 3.8/4.0',
  honors: ['校级优秀毕业生', 'ACM竞赛省级二等奖', '国家奖学金']
}

// 语言能力
const languages = [
  { name: '中文', level: '母语' },
  { name: '英语', level: '流利 (CET-6 600+)', description: '能流畅阅读英文技术文档，日常口语交流' }
]

// 证书
const certifications = [
  'AWS Solutions Architect Associate',
  'Google TensorFlow Developer Certificate'
]

// SEO
useHead({
  title: '在线简历 - TechPortfolio',
  meta: [
    { name: 'description', content: '陈实真的个人简历 - 高级前端工程师/AI工程化研究员，支持技术岗和管理岗多视角查看。' }
  ]
})

// 打印简历
const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="py-16 px-6 print:py-4">
    <div class="container mx-auto max-w-4xl">
      <!-- 视图切换 -->
      <div class="flex justify-center mb-8 print:hidden">
        <div class="bg-gray-100 rounded-lg p-1 flex">
          <button
            :class="[
              'px-6 py-2 rounded-md text-sm font-medium transition-colors',
              activeView === 'tech'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
            @click="toggleView('tech')"
          >
            <i class="fas fa-code mr-2"></i> 技术岗视角
          </button>
          <button
            :class="[
              'px-6 py-2 rounded-md text-sm font-medium transition-colors',
              activeView === 'management'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
            @click="toggleView('management')"
          >
            <i class="fas fa-users mr-2"></i> 管理岗视角
          </button>
        </div>
        <button
          @click="printResume"
          class="ml-4 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 border rounded-lg"
        >
          <i class="fas fa-print mr-2"></i> 打印
        </button>
      </div>

      <!-- 简历内容 -->
      <div class="bg-white border border-gray-200 rounded-xl p-8 print:border-none print:p-0">
        <!-- 头部 -->
        <div class="border-b pb-6 mb-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold mb-1">{{ baseInfo.name }}</h1>
              <p class="text-xl text-gray-600 mb-3">{{ baseInfo.title }}</p>
              <p class="text-gray-600 max-w-2xl">{{ baseInfo.summary }}</p>
            </div>
            <div class="mt-4 md:mt-0 flex flex-col gap-1 text-sm text-gray-600">
              <span><i class="fas fa-envelope w-5 mr-2"></i> {{ baseInfo.email }}</span>
              <span><i class="fas fa-phone w-5 mr-2"></i> {{ baseInfo.phone }}</span>
              <span><i class="fas fa-map-marker-alt w-5 mr-2"></i> {{ baseInfo.location }}</span>
              <a :href="baseInfo.github" target="_blank" class="hover:text-blue-600">
                <i class="fab fa-github w-5 mr-2"></i> GitHub
              </a>
              <a :href="baseInfo.blog" target="_blank" class="hover:text-blue-600">
                <i class="fas fa-globe w-5 mr-2"></i> 技术博客
              </a>
            </div>
          </div>
        </div>

        <!-- 核心技能 -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-chart-bar text-blue-600 mr-2"></i>
            {{ activeView === 'tech' ? '核心技术能力' : '管理能力' }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="skill in (activeView === 'tech' ? techSkills : managementSkills)"
              :key="skill.name"
              class="flex items-center"
            >
              <span class="w-40 text-sm text-gray-700">{{ skill.name }}</span>
              <div class="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  class="h-2 rounded-full transition-all duration-500"
                  :class="activeView === 'tech' ? 'bg-blue-600' : 'bg-purple-600'"
                  :style="{ width: `${skill.level}%` }"
                />
              </div>
              <span class="ml-3 text-sm text-gray-500 w-8 text-right">{{ skill.level }}%</span>
            </div>
          </div>
        </div>

        <!-- 工作经历 -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-briefcase text-blue-600 mr-2"></i>
            工作经历
          </h2>
          <div class="space-y-6">
            <div
              v-for="exp in (activeView === 'tech' ? techExperiences : managementExperiences)"
              :key="exp.company"
              class="border-l-2 border-blue-200 pl-4"
            >
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 class="font-semibold text-lg">{{ exp.company }}</h3>
                  <p class="text-gray-600">{{ exp.role }}</p>
                </div>
                <span class="text-sm text-gray-500">{{ exp.period }}</span>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="(highlight, index) in exp.highlights"
                  :key="index"
                  class="text-sm text-gray-700 flex items-start"
                >
                  <i class="fas fa-check text-green-500 mr-2 mt-1 text-xs"></i>
                  {{ highlight }}
                </li>
              </ul>
              <!-- 技术栈标签 (仅技术岗) -->
              <div v-if="activeView === 'tech' && 'stack' in exp" class="flex flex-wrap gap-2 mt-3">
                <span
                  v-for="tech in (exp as any).stack"
                  :key="tech"
                  class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
              <!-- 管理成果 (仅管理岗) -->
              <div v-if="activeView === 'management' && 'achievements' in exp" class="mt-3 bg-purple-50 rounded-lg p-3">
                <span class="text-sm font-medium text-purple-800">
                  <i class="fas fa-trophy mr-1"></i> {{ (exp as any).achievements }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 开源项目 -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fab fa-github text-blue-600 mr-2"></i>
            开源贡献
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="project in openSourceProjects"
              :key="project.name"
              class="border rounded-lg p-4"
            >
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-semibold text-sm">{{ project.name }}</h4>
                <span class="text-xs text-yellow-600">
                  <i class="fas fa-star mr-1"></i> {{ project.stars }}
                </span>
              </div>
              <p class="text-xs text-gray-600">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <!-- 教育背景 -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-graduation-cap text-blue-600 mr-2"></i>
            教育背景
          </h2>
          <div class="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 class="font-semibold">{{ education.school }}</h3>
              <p class="text-gray-600">{{ education.degree }}</p>
              <p class="text-sm text-gray-500">{{ education.gpa }}</p>
            </div>
            <span class="text-sm text-gray-500">{{ education.period }}</span>
          </div>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="honor in education.honors"
              :key="honor"
              class="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
            >
              {{ honor }}
            </span>
          </div>
        </div>

        <!-- 语言 & 证书 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold mb-3">语言能力</h3>
            <div class="space-y-2">
              <div v-for="lang in languages" :key="lang.name" class="flex justify-between text-sm">
                <span class="text-gray-700">{{ lang.name }}</span>
                <span class="text-gray-500">{{ lang.level }}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-3">证书</h3>
            <div class="space-y-2">
              <div v-for="cert in certifications" :key="cert" class="text-sm text-gray-700 flex items-center">
                <i class="fas fa-certificate text-yellow-500 mr-2"></i>
                {{ cert }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .container {
    max-width: 100% !important;
  }
}
</style>
