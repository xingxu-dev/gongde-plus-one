Page({
  data: {
    count: 0,
    isActive: false,
    // 音效文件列表
    soundList: [
      '/static/wooden-fish-sound.wav', // 你的原始音效
      '/static/wooden-fish-sound-1.mp3'
    ],
    currentSoundIndex: 0 // 当前音效索引
  },

  onLoad() {
    // 创建音频上下文
    this.audioContext = wx.createInnerAudioContext();
    this.audioContext.src = this.data.soundList[this.data.currentSoundIndex];
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

    // 切换音效的方法
    switchSound() {
      let nextIndex = (this.data.currentSoundIndex + 1) % this.data.soundList.length; // 循环切换索引
      this.audioContext.src = this.data.soundList[nextIndex]; // 更新音频源
      this.setData({
        currentSoundIndex: nextIndex
        // 可以更新按钮文本或其他显示，提示当前音效
      });
      wx.showToast({ // 可选：提示当前音效编号
        title: `切换音效 ${nextIndex + 1}`,
        icon: 'none',
        duration: 800
      });
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