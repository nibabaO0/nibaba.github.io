// 布局逻辑：导航、主题切换、终端快捷键

export function useLayout() {
  const isDark = ref(false)
  const isMobileMenuOpen = ref(false)
  const showTerminal = ref(false)

  const navItems = [
    { label: '首页', path: '/' },
    { label: '项目档案馆', path: '/projects' },
    { label: '代码实验室', path: '/lab' },
    { label: '技术雷达', path: '/radar' },
    { label: '技术博客', path: '/blog' },
    { label: '关于我', path: '/about' }
  ]

  const toggleDark = () => {
    isDark.value = !isDark.value
    //立即同步到 DOM
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === '`') {
      showTerminal.value = !showTerminal.value
      e.preventDefault()
    }
    if (e.key === 'Escape' && showTerminal.value) {
      showTerminal.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    isDark,
    isMobileMenuOpen,
    showTerminal,
    navItems,
    toggleDark
  }
}
