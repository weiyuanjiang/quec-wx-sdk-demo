// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false
  },
  // 跳转验证码登录
  toCodeLogin () {
    wx.navigateTo({
      url: '../login_code/index',
    })
  },
  // 跳转忘记密码
  toForgetPwd () {
    wx.navigateTo({
      url: '../user_forget_pwd/index',
    })
  },
  // 登录成功
  loginSuccess () {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  // 勾选用户协议
  changeProtocol (e) {
    const { detail } = e
    this.setData({
      checked: detail
    })
  },
  /**
  * 微信一键登录回调
  */
  loginResult (e) {
    if (e.detail) {
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
  },
  // 跳转注册
  toRegister () {
    wx.navigateTo({
      url: '../user_register/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})