---
title: "电商平台性能优化实践 - 从5s到0.5s"
description: "通过Webpack优化、懒加载、CDN加速等技术手段，将首屏加载时间从5s优化至0.5s的完整实践"
date: 2024-02-20
tags: ["性能优化", "Webpack", "React"]
category: "性能优化"
image: "/images/blog/performance.jpg"
---

# 电商平台性能优化实践

## 背景

我们的电商平台是一个大型 SPA 应用，首屏加载时间达到了 5s，严重影响了用户体验和转化率。经过三个月的优化，成功将首屏加载时间降至 0.5s。

## 问题诊断

```bash
# 使用 Lighthouse 诊断
lighthouse https://example.com --preset=desktop

# 关键发现
# - JavaScript 包体积 2.4MB（未压缩）
# - 图片未压缩，单张超过 500KB
# - 缺少有效的缓存策略
# - 没有使用 CDN
```

## 优化策略

### 1. 代码分割

```typescript
// webpack.config.ts
export default {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        common: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
```

### 2. 图片懒加载

```typescript
// 使用 Intersection Observer 实现
const useLazyImage = (src: string) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [imageSrc, setImageSrc] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageSrc(src)
        observer.disconnect()
      }
    })

    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src])

  return { imgRef, imageSrc }
}
```

### 3. CDN 部署

将静态资源部署到 CDN，配置合理的缓存策略：

- `index.html` - 不缓存
- `*.js`, `*.css` - 带 hash 的文件，永久缓存
- `*.png`, `*.jpg` - 1年缓存

## 优化成果

| 指标 | 优化前 | 优化后 | 提升 |
|------|--------|--------|------|
| FCP | 3.2s | 0.8s | 75% |
| LCP | 5.0s | 1.5s | 70% |
| TTI | 6.5s | 1.8s | 72% |
| Bundle Size | 2.4MB | 950KB | 60% |
| Lighthouse | 45 | 95 | +50 |

## 踩坑记录

1. **Webpack splitChunks 过度分割** - 导致请求数量激增，反而降低了性能
2. **CDN 缓存更新延迟** - 需要确保 HTML 引用的是最新的资源 hash
3. **图片格式兼容性** - WebP 格式在某些老版本浏览器上不兼容
