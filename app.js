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

    wx.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://img.yzcdn.cn/vant/vant-icon-96970a.woff2;https://at.alicdn.com/t/font_2553510_iv4v8nulyz.woff2?t=1649083952952")',
      success: console.log
    })
  },

  onHide () {

  },

  onShow () {
    plugin.theme.setSkin({
      primary: 'green'
    })

    plugin.theme.setLogo(toBase64('/images/mine/headImage.png'))
    plugin.theme.setTitle('示例DEMO')
    //如客户有自己的用户域及密钥，请设置成自己的哦
    plugin.config.setUserDomain('C.DM.8082.1')
    plugin.config.setUserDomainSecret('77FccVY8nsWMATjdWnR72VJQdKCF35NNDFLFah8MFCT1')

    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    })
  }
})
