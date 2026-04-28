// WebSocket 处理器 - 实时访客追踪
// 在 Nuxt Nitro 中启用 WebSocket 需要在 nuxt.config.ts 中设置 nitro.experimental.websocket = true

const activeConnections = new Set<WebSocket>()

// 广播消息给所有连接的客户端
function broadcast(data: any) {
  const message = JSON.stringify(data)
  activeConnections.forEach((ws) => {
    if (ws.readyState === 1) { // WebSocket.OPEN
      ws.send(message)
    }
  })
}

export default defineWebSocketHandler({
  // 连接建立
  open(peer) {
    activeConnections.add(peer as unknown as WebSocket)
    console.log(`[WS] Client connected. Online: ${activeConnections.size}`)

    // 发送欢迎消息和当前在线人数
    ;(peer as unknown as WebSocket).send(JSON.stringify({
      type: 'welcome',
      message: '连接成功！实时访客追踪已启用。',
      online: activeConnections.size,
      timestamp: new Date().toISOString()
    }))

    // 广播在线人数更新
    broadcast({
      type: 'online_update',
      online: activeConnections.size,
      timestamp: new Date().toISOString()
    })
  },

  // 接收消息
  message(peer, message) {
    try {
      const data = JSON.parse(message.text())

      switch (data.type) {
        case 'pageview':
          // 记录页面访问
          broadcast({
            type: 'visitor_activity',
            action: 'pageview',
            page: data.page || '/',
            timestamp: new Date().toISOString(),
            online: activeConnections.size
          })
          break

        case 'heatmap':
          // 鼠标热力图数据
          broadcast({
            type: 'heatmap_update',
            x: data.x,
            y: data.y,
            page: data.page,
            timestamp: new Date().toISOString()
          })
          break

        default:
          ;(peer as unknown as WebSocket).send(JSON.stringify({
            type: 'echo',
            data: data
          }))
      }
    } catch (err) {
      ;(peer as unknown as WebSocket).send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format'
      }))
    }
  },

  // 连接关闭
  close(peer) {
    activeConnections.delete(peer as unknown as WebSocket)
    console.log(`[WS] Client disconnected. Online: ${activeConnections.size}`)

    broadcast({
      type: 'online_update',
      online: activeConnections.size,
      timestamp: new Date().toISOString()
    })
  },

  // 连接错误
  error(peer, error) {
    console.error(`[WS] Error:`, error)
    activeConnections.delete(peer as unknown as WebSocket)
  }
})
