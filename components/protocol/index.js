// components/protocol/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    checked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 勾选用户协议
    onChange (event) {
      this.setData({
        checked: event.detail
      })
      this.triggerEvent('changeProtocol', event.detail)
    },
    // 跳转服务协议
    toProtocol () {
      wx.navigateTo({
        url: '../account_protocol/index',
      })
    },
    // 跳转隐私协议
    toPrivacy () {
      wx.navigateTo({
        url: '../account_privacy/index',
      })
    }
  }
})
