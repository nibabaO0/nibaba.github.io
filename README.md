# TechPortfolio - 个人技术博客

专注前端性能优化与 AI 工程化实践的个人技术博客，集项目展示、技术雷达、代码实验室与实时访客追踪于一体。

## 功能特性

- **项目档案馆** — 分类展示技术项目，涵盖性能指标、挑战与解决方案
- **技术雷达** — 基于 ThoughtWorks 四环模型（采纳/试验/评估/暂缓）的技术趋势追踪，集成 ECharts 雷达图可视化
- **终端彩蛋** — 内置交互式终端（Ctrl+` 唤起），支持命令行浏览个人信息
- **技术博客** — 基于 Markdown 的内容管理系统，支持代码高亮与目录生成
- **实时访客追踪** — WebSocket 驱动的实时在线人数与页面访问统计
- **暗色模式** — 支持亮色/暗色主题切换
- **SEO 优化** — 完整的 Open Graph、Twitter Card、结构化数据支持

## 安装指南

### 环境要求

- Node.js >= 18
- npm >= 9

### 本地开发

```bash
# 克隆仓库
git clone <your-repo-url>
cd tech-portfolio-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 使用方法

### 页面导航

| 路径          | 说明               |
| ------------- | ------------------ |
| `/`           | 首页               |
| `/projects`   | 项目档案馆         |
| `/lab`        | 代码实验室         |
| `/radar`      | 技术雷达           |
| `/blog`       | 技术博客           |
| `/about`      | 关于我             |

### 终端模式

在任意页面按下 `Ctrl+`` 呼出交互式终端，支持以下命令：

- `help` — 查看帮助
- `about` — 关于我
- `skills` — 技术技能
- `projects` — 项目列表
- `contact` — 联系方式
- `stack` — 技术栈详情
- `fun` — 彩蛋

按 `Escape` 关闭终端。

### API 接口

| 端点              | 说明           |
| ----------------- | -------------- |
| `/api/health`     | 健康检查与统计 |
| `/api/stats`      | 访问统计数据   |
| `/api/projects`   | 项目列表 API   |
| `/_ws`            | WebSocket 端点 |

### 发布文章

在 `content/blog/` 目录下创建 `.md` 文件即可自动生成为博客文章。

## 技术栈

| 类别       | 技术                                      |
| ---------- | ----------------------------------------- |
| 框架       | Nuxt 3, Vue 3 (Composition API)           |
| 语言       | TypeScript                                |
| 样式       | Tailwind CSS, PostCSS                     |
| 可视化     | ECharts 5, vue-echarts                    |
| 内容管理   | @nuxt/content (Markdown/MDC)              |
| 实时通信   | WebSocket (Nitro experimental)            |
| 服务端     | Nitro (Node.js preset)                    |
| SEO        | @nuxtjs/seo, 结构化数据 (JSON-LD)         |
| 图标       | Font Awesome 6                            |
| 构建工具   | Vite                                      |

## 项目结构

```
├── app.vue                  # 应用入口
├── pages/                   # 页面组件
│   ├── projects.vue         # 项目档案馆
│   └── radar.vue            # 技术雷达
├── components/              # 通用组件
│   └── Terminal.vue         # 终端组件
├── composables/             # 组合式逻辑（与页面分离）
│   ├── useProjects.ts       # 项目数据与过滤
│   ├── useRadar.ts          # 雷达图与时间线
│   ├── useTerminal.ts       # 终端命令逻辑
│   ├── useLayout.ts         # 布局与导航逻辑
│   └── useWebSocket.ts      # WebSocket 连接管理
├── layouts/                 # 布局
│   └── default.vue          # 默认布局
├── content/blog/            # Markdown 博客文章
├── server/                  # 服务端 API 与 WebSocket
│   ├── api/
│   └── routes/
├── assets/css/              # 全局样式
├── nuxt.config.ts           # Nuxt 配置
└── tailwind.config.js       # Tailwind 配置
```

## 许可

MIT License
