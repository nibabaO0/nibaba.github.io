<script setup lang="ts">
const emit = defineEmits<{
  close: []
}>()

const { outputs, currentInput, handleKeydown } = useTerminal()

const inputRef = ref<HTMLInputElement | null>(null)

const focusInput = () => {
  inputRef.value?.focus()
}

onMounted(() => {
  focusInput()
})
</script>

<template>
  <div class="terminal-container" @click="focusInput">
    <!-- 输出区域 -->
    <div
      id="terminal-output"
      class="p-4 h-64 overflow-y-auto font-mono text-sm"
    >
      <div
        v-for="(item, index) in outputs"
        :key="index"
        class="mb-2"
        :class="{
          'text-gray-300': item.type === 'output',
          'text-red-400': item.type === 'error'
        }"
      >
        <span v-html="item.content"></span>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="flex items-center px-4 py-2 bg-gray-800/50">
      <span class="text-green-400 font-mono mr-2">$</span>
      <input
        ref="inputRef"
        v-model="currentInput"
        type="text"
        class="bg-transparent border-none outline-none text-green-400 font-mono w-full"
        placeholder="输入命令..."
        @keydown="handleKeydown"
        autofocus
      />
    </div>
  </div>
</template>

<style scoped>
.terminal-container {
  cursor: text;
}

#terminal-output::-webkit-scrollbar {
  width: 8px;
}

#terminal-output::-webkit-scrollbar-track {
  background: #1f2937;
}

#terminal-output::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

#terminal-output::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
