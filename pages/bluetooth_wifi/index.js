// pages/bluetooth_wifi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let self = this
    if (options.deviceId) {
      self.setData({
        deviceId: options.deviceId
      })
    }
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

  wifiSuccess (e) {
    wx.redirectTo({
      url: '../bluetooth_analyse/index?info=' + JSON.stringify(e.detail),
    })
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

  }
})
