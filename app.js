const plugin = requirePlugin('quecPlugin')
App({
  globalData: {

  },

  onLaunch () {
    plugin.theme.setSkin({
      'primary': '#00ff00',
      secondary: '#F9EAE9', //辅色
      radius: '10px', //圆角
      text_h2: '#333333',//一级文本颜色
      text_h3: '#666666',//二级文本颜色
      text_h4: '#999999',//三级文本颜色
      line: '#BFBFBF',//线条颜色
      arrow: '#BFBFBF',//箭头颜色
      cancel: '#999999'//弹框取消文字颜色
    })
    plugin.config.setToLoginFn(() => {
      plugin.config.setUserInfo('')
      wx.redirectTo({
        url: '/pages/login/index'
      })
    })
  },

  onHide () {

  },

  onShow () {

    plugin.config.setBaseUrl('https://iot-api.quectelcn.com')
    plugin.config.setUserDomain('C.DM.5903.1')
    plugin.config.setUserDomainSecret('EufftRJSuWuVY7c6txzGifV9bJcfXHAFa7hXY5doXSn7')
    plugin.config.setWsUrl('wss://iot-ws.quectel.com/ws/v1')
    plugin.config.setOutTime(180000)

    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    })
  }
})
