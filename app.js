const plugin = requirePlugin('quecPlugin')
App({
  globalData: {

  },

  onLaunch () {
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
    plugin.config.setBaseUrl('http://192.168.25.64:30006')
    plugin.config.setUserDomain('C.DM.29772.1')
    plugin.config.setUserDomainSecret('FPDko3tiB5HgTJhpHaUjpsYNGKbEHfjkqe2u8pB8gtKp')
    plugin.config.setWsUrl('ws://192.168.25.64:30777/ws/v1')

    // plugin.config.setBaseUrl('https://iot-api.quectelcn.com')
    // plugin.config.setUserDomain('C.DM.5903.1')
    // plugin.config.setUserDomainSecret('EufftRJSuWuVY7c6txzGifV9bJcfXHAFa7hXY5doXSn7')
    // plugin.config.setWsUrl('wss://iot-ws.quectel.com/ws/v1')
    plugin.config.setOutTime(180000)
    plugin.theme.setSkin({
      primary: 'green'
    })
    plugin.theme.setLogo('data:image/png;base64,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')
    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    })
  }
})
