
Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: 'V1.0.0',
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

  goPrivacy () {
    wx.navigateTo({
      url: '../account_privacy/index',
    })
  },

  goProtocol () {
    wx.navigateTo({
      url: '../account_protocol/index',
    })
  },

  goAboutQuec () {
    console.log('a')
    wx.navigateTo({
      url: '../account_about_quec/index',
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
