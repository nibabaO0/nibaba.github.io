<script setup lang="ts">
const { isDark, isMobileMenuOpen, showTerminal, navItems, toggleDark } = useLayout()
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <i class="fas fa-code text-white"></i>
          </div>
          <span class="font-semibold text-lg">TechPortfolio</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Social Links & Actions -->
        <div class="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" class="text-gray-600 hover:text-blue-600">
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="text-gray-600 hover:text-blue-600">
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <button
            @click="toggleDark"
            class="p-2 rounded-full hover:bg-gray-100"
            title="切换主题"
          >
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'" class="text-gray-600"></i>
          </button>
          <!-- Terminal Toggle -->
          <button
            @click="showTerminal = !showTerminal"
            class="hidden md:flex p-2 rounded-full hover:bg-gray-100 items-center space-x-1"
            title="终端模式 (Ctrl+`)"
          >
            <i class="fas fa-terminal text-gray-600"></i>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-gray-600"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <nav class="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-blue-600 transition-colors py-2"
            active-class="text-blue-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1" :key="$route.fullPath">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 class="font-semibold mb-4">TechPortfolio</h4>
            <p class="text-gray-400 text-sm">
              专注前端性能优化与 AI 工程化实践的技术博客
            </p>
            <p class="text-gray-400 text-sm mt-2">
              累计解决 <span class="text-blue-400 font-medium">127</span> 个技术难题，
              文章被 <span class="text-purple-400 font-medium">43</span> 个项目引用
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><NuxtLink to="/projects" class="hover:text-white">项目档案</NuxtLink></li>
              <li><NuxtLink to="/lab" class="hover:text-white">代码实验室</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-white">技术博客</NuxtLink></li>
              <li><NuxtLink to="/radar" class="hover:text-white">技术雷达</NuxtLink></li>
              <li><NuxtLink to="/resume" class="hover:text-white">在线简历</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">技术栈</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>React / Vue.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Python / TensorFlow</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">联系我</h4>
            <div class="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-white">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <p class="text-gray-400 text-sm">
              <i class="fas fa-envelope mr-2"></i> contact@example.com
            </p>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 TechPortfolio. 版权所有</p>
          <p class="mt-1">
            <NuxtLink to="/api-docs" class="hover:text-white">API文档</NuxtLink>
            <span class="mx-2">|</span>
            <a href="https://github.com" target="_blank" class="hover:text-white">代码质量报告</a>
          </p>
        </div>
      </div>
    </footer>

    <!-- Terminal Modal (彩蛋功能) -->
    <div
      v-if="showTerminal"
      class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      @click.self="showTerminal = false"
    >
      <div class="bg-gray-900 rounded-lg w-full max-w-2xl mx-4 overflow-hidden shadow-xl">
        <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-gray-400 text-sm font-mono">Terminal — TechPortfolio</span>
          <button @click="showTerminal = false" class="text-gray-400 hover:text-white">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <Terminal @close="showTerminal = false" />
      </div>
    </div>
  </div>
</template>
