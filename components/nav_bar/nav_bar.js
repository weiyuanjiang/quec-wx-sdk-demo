Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    isTab: {
      type: Boolean,
      value: false
    },
    backUrl: {
      type: String,
      value: ''
    },
    isHome: {
      type: Boolean,
      value: false
    },
    homeUrl: {
      type: String,
      value: ''
    },
    homeTab: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    isTab: false,
    backUrl: '',
    homeUrl: '',
    isHome: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back () {
      let self = this
      if (self.data.backUrl) {
        if (self.data.isTab) {
          wx.nextTick(() => {
            wx.switchTab({
              url: self.data.backUrl
            })
          })
        } else {
          wx.nextTick(() => {
            wx.redirectTo({
              url: self.data.backUrl
            })
          })
        }
      } else {
        wx.nextTick(() => {
          wx.navigateBack({
            delta: 1,
          })
        })
      }
    },
    home () {
      let self = this
      if (self.data.homeUrl) {
        wx.nextTick(() => {
          wx.switchTab({
            url: self.data.homeUrl
          })
        })
      }
    }
  }
})
