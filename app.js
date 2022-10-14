const plugin = requirePlugin('quecPlugin')
import { toBase64 } from '/utils/tool.js'
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

    plugin.theme.setLogo(toBase64('/images/mine/headImage.png'))
    plugin.theme.setTitle('示例DEMO')

    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    })
  }
})
