# 功德+1

一个简单的微信小程序，通过点击木鱼来积累功德。每次点击都会播放木鱼敲击音效，并记录功德次数。

## 功能特点

- 🎯 简洁的古典风格界面
- 🎵 真实的木鱼敲击音效
- 📊 功德计数显示
- ✨ 点击动画效果
- 🎨 优雅的视觉设计

## 技术栈

- 微信小程序原生开发
- WXML + WXSS + JavaScript

## 项目结构

```
gongde-plus-one/
├── app.js                 # 小程序入口文件
├── app.json              # 全局配置
├── app.wxss              # 全局样式
├── pages/                # 页面文件夹
│   └── index/           # 主页面
│       ├── index.js     # 页面逻辑
│       ├── index.wxml   # 页面结构
│       └── index.wxss   # 页面样式
├── static/               # 静态资源
│   ├── wooden-fish.png  # 木鱼图片
│   └── wooden-fish-sound.wav  # 木鱼音效
└── sitemap.json         # 小程序站点配置
```

## 开发环境

- 微信开发者工具
- 基础库版本：2.30.0 或以上

## 本地开发

1. 克隆项目
```bash
git clone https://github.com/xingxu-dev/gongde-plus-one.git
```

2. 使用微信开发者工具打开项目

3. 在微信开发者工具中预览

## 使用说明

1. 打开小程序
2. 点击中央的木鱼图片
3. 每次点击都会：
   - 播放木鱼敲击音效
   - 增加功德计数
   - 显示点击动画效果

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 开源协议

MIT License

## 作者

[xingxu-dev](https://github.com/xingxu-dev)

## 致谢

- 感谢所有使用和关注这个项目的人
- 特别感谢提供木鱼图片和音效的创作者 

## 样式修改

/* 全局背景为黑色 */
page, .container {
  background: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 主标题 */
.main-title {
  margin-top: 32px;
  font-size: 32px;
  font-weight: bold;
  color: #a86a2c;
  letter-spacing: 2px;
  text-align: center;
}

/* 副标题 */
.sub-title {
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 32px;
  text-align: center;
}

/* 木鱼图片 */
.wooden-fish-container {
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(90, 58, 27, 0.08);
}

.wooden-fish {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  transition: transform 0.1s ease;
}

.wooden-fish-active {
  transform: scale(0.95);
}

/* 功德数 */
.gongde {
  font-size: 22px;
  color: #a86a2c;
  font-weight: bold;
  margin: 24px 0 12px 0;
  text-align: center;
}
.gongde-num {
  font-size: 28px;
  color: #a86a2c;
  font-weight: bold;
}

/* 按钮组 */
.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}
.button {
  background: #a86a2c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 16px;
  margin: 0 8px;
  box-shadow: 0 2px 8px rgba(90, 58, 27, 0.08);
  display: flex;
  align-items: center;
}
.button:active {
  background: #8d5c2c;
}
.iconfont {
  font-size: 18px;
  margin-right: 6px;
}

/* 信息卡片 */
.info-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(90, 58, 27, 0.08);
  max-width: 700px;
  margin: 0 auto 32px auto;
  padding: 24px 32px;
}
.info-card-title {
  color: #a86a2c;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
}
.info-card-content {
  color: #222;
  font-size: 15px;
  line-height: 1.8;
}

/* 底部卡片 */
.card-list {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(90, 58, 27, 0.06);
  padding: 18px 12px;
  width: 180px;
  text-align: center;
  margin-bottom: 12px;
}
.card-icon {
  font-size: 32px;
  margin-bottom: 8px;
  color: #a86a2c;
}
.card-title {
  font-weight: bold;
  color: #a86a2c;
  margin-bottom: 6px;
}
.card-desc {
  color: #222;
  font-size: 14px;
}

/* 底部文案 */
.footer {
  text-align: center;
  color: #b0b0b0;
  font-size: 14px;
  margin-bottom: 24px;
} 