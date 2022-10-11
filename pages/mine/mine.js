// 获取应用实例
const plugin = requirePlugin('quecPlugin')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImage: '',
    nikeName: '',
    phonenumber: '',
    email: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self = this
    self.initUinfo()
    if (typeof self.getTabBar === 'function' && self.getTabBar()) {
      wx.nextTick(() => {
        self.getTabBar().setData({
          selected: 2
        })
      })
    }
  },

  initUinfo () {
    let self = this
    self.setData({
      headImage: '',
      nikeName: ''
    })
    plugin.quecAccount.getUInfo({
      success (res) {
        let result = res.data
        let hImg = result.headimg
        if (hImg) {
          if (hImg.indexOf('thirdwx.') > 0) {
            hImg = hImg.replace('thirdwx.', 'wx.')
          }
          self.setData({
            headImage: hImg
          })

        } else {
          self.setData({
            headImage: ''
          })
        }

        self.setData({
          nikeName: result.nikeName ? result.nikeName : ''
        })
      },
      fail (res) {
        console.log(JSON.stringify(res))
      }
    })
  },

  /**
   * 个人中心
   */
  goUserInfo () {
    wx.navigateTo({
      url: '../account_info/index',
    })
  },

  goUserSystem () {
    wx.navigateTo({
      url: '../account_system/index',
    })
  },

  goUserAbout () {
    wx.navigateTo({
      url: '../account_about/index',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


})
