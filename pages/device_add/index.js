// pages/device_add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dItem: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let self = this
    if (options.item) {
      self.setData({
        dItem: JSON.parse(options.item)
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

  addSuccess () {
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 二维码扫码成功
   * @param {*} e 
   */
  scanSuccess (e) {
    wx.redirectTo({
      url: '../device_add/index?item=' + JSON.stringify(e.detail),
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

  },

})
