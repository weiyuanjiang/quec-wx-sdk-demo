const plugin = requirePlugin('quecPlugin')
import { toBase64 } from '/utils/tool.js'
App({
  globalData: {

  },

  onLaunch () {
    /**
     * token过期跳转到登录页面
     */
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
    plugin.config.setUserDomain('C.DM.5903.1')
    plugin.config.setUserDomainSecret('EufftRJSuWuVY7c6txzGifV9bJcfXHAFa7hXY5doXSn7')

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
