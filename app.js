const plugin = requirePlugin('quecPlugin')
import { toLogin, getEnvConfig } from './utils/tool.js'

App({
  globalData: {
    envData: getEnvConfig()
  },

  onLaunch () {
    plugin.config.setToLoginFn(() => {
      toLogin()
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
    plugin.theme.setSkin({
      primary: '#00ff00',
    })
    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    })
  }
})
