Page({
  data: {
    count: 0,
    isActive: false
  },

  onLoad() {
    // 创建音频上下文
    this.audioContext = wx.createInnerAudioContext();
    this.audioContext.src = '/static/wooden-fish-sound.wav';
  },

  tapWoodenFish() {
    // 播放音效
    this.audioContext.stop();
    this.audioContext.play();
    
    // 增加计数
    this.setData({
      count: this.data.count + 1,
      isActive: true
    });

    // 重置动画状态
    setTimeout(() => {
      this.setData({
        isActive: false
      });
    }, 100);
  },

  onUnload() {
    // 页面卸载时释放音频资源
    if (this.audioContext) {
      this.audioContext.destroy();
    }
  },

  resetCount() {
    this.setData({
      count: 0
    });
  }
}) 