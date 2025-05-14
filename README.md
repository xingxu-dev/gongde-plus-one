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
