import { tip } from '../../utils/tip.js'
const plugin = requirePlugin('quecPlugin')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phoneVisible: {
      type: Boolean,
      value: false
    },
    isCheck: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    btnColor: ''
  },

  pageLifetimes: {
    show: function () {
      this.setData({
        btnColor: plugin.theme.getSkin().primary,
      })
    },
    hide: function () { }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkTip () {
      tip('请勾选服务协议')
      return
    },

    /**
     * 获取用户信息
     * @param {*} e 
     */
    getUserInfo (e) {
      let self = this
      let rsData = {}
      wx.login({
        success: res => {
          console.log(res)
          rsData.wxCode = res.code
        }, fail () {
          console.log('login')
          self.triggerEvent('getUserInfo', '')
        }
      })
      wx.getUserProfile({
        desc: '微信小程序SDK',
        success: (result) => {
          console.log(result)
          rsData.encryptedData = result.encryptedData
          rsData.iv = result.iv
          rsData.rawData = result.rawData
          rsData.signature = result.signature
          console.log(rsData)
          self.triggerEvent('getUserInfo', JSON.stringify(rsData))
        }, fail () {
          console.log('fail')
          self.triggerEvent('getUserInfo', '')
        }
      })
    },

    /**
     * 获取手机号信息
     * @param {*} e 
     */
    getPhoneNumber (e) {
      console.log('e', e)
      this.triggerEvent('getPhoneNumber', e.detail)
    },

  }
})
