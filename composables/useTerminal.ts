// 终端命令处理逻辑

export interface TerminalOutput {
  type: 'input' | 'output' | 'error'
  content: string
}

export function useTerminal() {
  const history = ref<string[]>([])
  const outputs = ref<TerminalOutput[]>([])
  const currentInput = ref('')

  const initMessage = `
<span class="text-green-400">欢迎来到 TechPortfolio 终端模式!</span>
输入 <span class="text-yellow-400">help</span> 查看可用命令。
<span class="text-gray-500">提示: Ctrl+\` 或 Escape 关闭终端</span>
`

  const commands: Record<string, () => string> = {
    help: () => `
可用命令:
  <span class="text-blue-400">help</span>      - 显示帮助信息
  <span class="text-blue-400">about</span>     - 关于我
  <span class="text-blue-400">skills</span>    - 技术技能
  <span class="text-blue-400">projects</span>  - 项目列表
  <span class="text-blue-400">contact</span>   - 联系方式
  <span class="text-blue-400">stack</span>     - 技术栈详情
  <span class="text-blue-400">resume</span>    - 查看简历
  <span class="text-blue-400">clear</span>     - 清屏
  <span class="text-blue-400">exit</span>      - 退出终端
  <span class="text-blue-400">fun</span>       - 😄 彩蛋`,
    about: () => `
<span class="text-green-400">=== 关于我 ===</span>
姓名: 张三 (示例)
职位: 前端工程师 / AI工程化研究员
经验: 5年+
专注: 前端性能优化、AI模型部署、全栈开发
座右铭: "技术驱动产品，性能决定体验"`,
    skills: () => `
<span class="text-green-400">=== 技术技能 ===</span>
<span class="text-yellow-400">前端:</span> JavaScript (95%), TypeScript (90%), React (92%), Vue (88%)
<span class="text-yellow-400">后端:</span> Node.js (85%), Python (80%), FastAPI (75%)
<span class="text-yellow-400">AI/ML:</span> TensorFlow (75%), PyTorch (70%), Model Deployment (80%)
<span class="text-yellow-400">工具:</span> Docker, Git, CI/CD, Kubernetes`,
    projects: () => `
<span class="text-green-400">=== 项目列表 ===</span>
1. <span class="text-blue-400">电商平台性能优化</span> - 首屏加载从5s优化至0.5s
2. <span class="text-blue-400">AI模型部署平台</span> - 高性能推理服务
3. <span class="text-blue-400">实时数据可视化</span> - WebSocket + Grafana
4. <span class="text-blue-400">开源贡献</span> - 127+ PRs merged`,
    contact: () => `
<span class="text-green-400">=== 联系方式 ===</span>
GitHub: <span class="text-blue-400">https://github.com/yourusername</span>
LinkedIn: <span class="text-blue-400">https://linkedin.com/in/yourusername</span>
Email: <span class="text-blue-400">contact@example.com</span>
Blog: <span class="text-blue-400">https://your-domain.com</span>`,
    stack: () => `
<span class="text-green-400">=== 技术栈详情 ===</span>
<span class="text-yellow-400">【采纳】</span> React 18+, TypeScript, Tailwind CSS
<span class="text-yellow-400">【试验】</span> WebAssembly, RSC, AI Agents
<span class="text-yellow-400">【评估】</span> Deno, Zig, WebGPU
<span class="text-yellow-400">【暂缓】</span> jQuery, IE兼容, Flash`,
    resume: () => `
<span class="text-green-400">=== 简历预览 ===</span>
访问 <span class="text-blue-400">/resume</span> 页面查看完整简历
支持技术岗/管理岗多视角切换`,
    clear: () => {
      outputs.value = []
      return ''
    },
    exit: () => '<span class="text-yellow-400">再见!</span>',
    fun: () => `
<span class="text-green-400">🎉 彩蛋时间!</span>

  <span class="text-purple-400">为什么程序员喜欢暗色模式?</span>
  <span class="text-gray-300">因为光明会吸引bugs! 🐛</span>

  <span class="text-purple-400 mt-2">调试代码的三个阶段:</span>
  1. "这不可能出错"
  2. "这不应该出错"
  3. "哦...原来是这样..."

<span class="text-yellow-400">1111111111 = 351 in base 2</span>
<span class="text-red-400">1010101010 = 682 in base 2</span>
<span class="text-green-400">// 不信的话自己算算 😄</span>`
  }

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    outputs.value.push({
      type: 'input',
      content: `<span class="text-gray-500">$</span> ${cmd}`
    })

    if (!trimmedCmd) return

    history.value.push(cmd)

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]()
      if (result) {
        outputs.value.push({ type: 'output', content: result })
      }
    } else {
      outputs.value.push({
        type: 'error',
        content: `<span class="text-red-400">命令未找到: ${trimmedCmd}</span>
输入 <span class="text-yellow-400">help</span> 查看可用命令。`
      })
    }

    await nextTick()
    scrollToBottom()
  }

  const scrollToBottom = () => {
    const outputEl = document.getElementById('terminal-output')
    if (outputEl) {
      outputEl.scrollTop = outputEl.scrollHeight
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput.value)
      currentInput.value = ''
    } else if (e.key === 'ArrowUp' && history.value.length > 0) {
      const lastIndex = history.value.length - 1
      currentInput.value = history.value[lastIndex] || ''
    }
  }

  // 初始化欢迎信息
  onMounted(() => {
    outputs.value.push({ type: 'output', content: initMessage })
  })

  return {
    outputs,
    currentInput,
    history,
    handleKeydown,
    executeCommand
  }
}
