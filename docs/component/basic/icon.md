---
title: Icon 图标
---

# Icon 图标

### 介绍

基于 IconFont 字体的图标集，可以通过 Icon 组件使用。

### 安装

```javascript
import { createApp } from 'vue'
import { Icon } from '@vowui/vowui'

const app = createApp()
app.use(Icon)
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<vow-icon name="dongdong"></vow-icon>
<vow-icon name="JD"></vow-icon>
<vow-icon
  size="40"
  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
></vow-icon>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<vow-icon name="loading" color="#fa2c19"></vow-icon>
<vow-icon name="check" color="#64b578"></vow-icon>
<vow-icon name="getup" color="#fa2c19"></vow-icon>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<vow-icon name="mark"></vow-icon>
<vow-icon name="mark" size="24"></vow-icon>
<vow-icon name="mark" size="16"></vow-icon>
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<vow-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数         | 说明                             | 类型             | 默认值           |
| ------------ | -------------------------------- | ---------------- | ---------------- |
| name         | 图标名称或图片链接               | String           | -                |
| color        | 图标颜色                         | String           | -                |
| size         | 图标大小，如 `20px` `2em` `2rem` | String or Number | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String           | `vowui-iconfont` |
| tag          | HTML 标签                        | String           | `i`              |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击图标时触发 | event: Event |
