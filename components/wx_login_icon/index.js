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
      wx.getUserProfile({
        desc: '微信小程序SDK',
        success: (result) => {
          let rsData = {
            encryptedData: result.encryptedData,
            iv: result.iv,
            rawData: result.rawData,
            signature: result.signature
          }
          wx.login({
            success: res => {
              console.log('code:' + res.code)
              rsData.wxCode = res.code
              this.triggerEvent('getUserInfo', JSON.stringify(rsData))

            }, fail () {
              this.triggerEvent('getUserInfo', '')
            }
          })
        }, fail () {
          this.triggerEvent('getUserInfo', '')
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


    /**
     * 关闭手机号授权弹框
     */
    // onClose () {
    //   this.setData({ phoneVisible: false })
    // }
  }
})
