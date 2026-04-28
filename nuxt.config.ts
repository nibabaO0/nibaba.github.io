// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-27',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/seo'
  ],

  // OG Image 禁用
  ogImage: {
    enabled: false
  },

  // SEO配置 - 修改了 URL
  site: {
    url: 'https://nibaba00.github.io', // ✅ 修改为你的实际域名
    name: 'TechPortfolio - 个人技术博客',
    description: '专注前端性能优化与AI工程化实践的技术博客',
    defaultLocale: 'zh-CN',
    identity: {
      type: 'Person'
    }
  },

  // Sitemap配置
  sitemap: {
    autoLastmod: true,
    cacheMaxAgeSeconds: 3600
  },

  // 应用配置
  app: {
    baseURL: '/', // ⚠️ 必须是斜杠，不能是 '/nibaba00.github.io/'
    buildAssetsDir: '/_nuxt/', // ⚠️ 确保资源目录也是根路径
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' }
      ],
      meta: [
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'author', content: 'TechPortfolio' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'TechPortfolio' },
        { property: 'og:locale', content: 'zh_CN' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@TechPortfolio' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'TechPortfolio',
            jobTitle: '前端工程师 / AI工程化研究员',
            url: 'https://nibaba00.github.io', // ✅ 修改为实际域名
            sameAs: [
              // ✅ 请将下方的 example 替换为你的真实账号
              'https://github.com/nibaba00', 
              'https://linkedin.com/in/your-real-profile', 
              'https://twitter.com/your_real_handle'
            ]
          })
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // TailwindCSS配置
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  // Content配置
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark'
      },
      langs: ['javascript', 'typescript', 'vue', 'html', 'css', 'bash', 'json', 'python']
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 }
    }
  },

  // Nitro服务端配置 - 删除了 preset 或注释掉
  nitro: {
    // preset: 'node-server', // ❌ 注释掉，GitHub Pages 不需要 Node 服务
    experimental: {
      websocket: true
    }
  },

  // 运行时配置 - 修改了 URL
  runtimeConfig: {
    public: {
      siteUrl: 'https://nibaba00.github.io' // ✅ 修改为实际域名
    }
  },

  // TypeScript配置
  typescript: {
    strict: true,
    typeCheck: false
  }
})
