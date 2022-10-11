const plugin = requirePlugin('quecPlugin')
import { tip } from '../../utils/tip.js'

Component({
  properties: {

  },
  data: {
    hidden: false,
    scrollTop: 0,
    show: false,
    isToken: ''
  },
  pageLifetimes: {
    show: function () {
      this.setData({
        show: false
      })
      this.triggerEvent('noScroll', true)
    }
  },
  methods: {
    pageScroll (ev) {
      var _this = this
      if (ev.scrollTop <= 0) {
        ev.scrollTop = 0
      }
      if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
        this.setData({
          hidden: true
        })
      } else {
        this.setData({
          hidden: false
        })
      }
      setTimeout(function () {
        _this.setData({
          scrollTop: ev.scrollTop
        })
      }, 0)
    },
    onClickShow () {
      let show = this.data.show
      this.setData({
        show: !show
      })
      this.triggerEvent('noScroll', show)
      plugin.quecBle.stopBleScan({
        success () { },
        fail (res) { }
      })
      plugin.quecBle.closeBle({
        success () { },
        fail (res) { }
      })
    },
    // 跳转蓝牙配网
    toNetwork () {
      this.setData({
        show: false
      })
      this.triggerEvent('noScroll', true)
      plugin.quecBle.stopBleScan({
        success () { },
        fail (res) { }
      })
      plugin.quecBle.closeBle({
        success () { },
        fail (res) { }
      })
      wx.nextTick(() => {
        wx.navigateTo({
          url: '/pages/bluetooth_scan/index'
        })
      })
    },
    //去扫码安装
    toScan () {
      let self = this
      plugin.quecManage.scan({
        success (res) {
          console.log("res success:" + JSON.stringify(res))
          wx.navigateTo({
            url: '../device_add/index?item=' + JSON.stringify(res),
          })
        },
        fail (res) {
          if (res.code === 5478) {
            let timer = setTimeout(() => {
              tip(res.msg)
              self.triggerEvent('invalidDevice', true)
              clearTimeout(timer)
            }, 2000)
          }
          console.log("res fail--dd:" + JSON.stringify(res))
        }
      })
    }
  }
})
