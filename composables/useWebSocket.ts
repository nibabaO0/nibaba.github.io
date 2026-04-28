// WebSocket composable - 实时访客追踪

export function useWebSocket() {
  const ws = ref<WebSocket | null>(null)
  const isConnected = ref(false)
  const onlineCount = ref(0)
  const recentActivities = ref<{ type: string, page: string, timestamp: string }[]>([])

  const connect = () => {
    if (process.client) {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
      const url = `${protocol}//${window.location.host}/_ws`

      try {
        ws.value = new WebSocket(url)

        ws.value.onopen = () => {
          isConnected.value = true
          console.log('[WebSocket] Connected')
        }

        ws.value.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data)

            switch (data.type) {
              case 'welcome':
              case 'online_update':
                onlineCount.value = data.online
                break
              case 'visitor_activity':
                recentActivities.value.unshift({
                  type: data.action,
                  page: data.page,
                  timestamp: data.timestamp
                })
                // 保留最近20条
                if (recentActivities.value.length > 20) {
                  recentActivities.value.pop()
                }
                break
            }
          } catch (error) {
            console.error('[WebSocket] Parse error:', error)
          }
        }

        ws.value.onclose = () => {
          isConnected.value = false
          console.log('[WebSocket] Disconnected')
          // 5秒后重连
          setTimeout(connect, 5000)
        }

        ws.value.onerror = (error) => {
          console.error('[WebSocket] Error:', error)
        }
      } catch (error) {
        console.error('[WebSocket] Connection failed:', error)
      }
    }
  }

  const sendPageView = (page: string) => {
    if (ws.value && isConnected.value) {
      ws.value.send(JSON.stringify({
        type: 'pageview',
        page
      }))
    }
  }

  const sendHeatmapData = (x: number, y: number) => {
    if (ws.value && isConnected.value) {
      ws.value.send(JSON.stringify({
        type: 'heatmap',
        x,
        y,
        page: window.location.pathname
      }))
    }
  }

  const disconnect = () => {
    if (ws.value) {
      ws.value.close()
      ws.value = null
      isConnected.value = false
    }
  }

  return {
    ws,
    isConnected,
    onlineCount,
    recentActivities,
    connect,
    disconnect,
    sendPageView,
    sendHeatmapData
  }
}
