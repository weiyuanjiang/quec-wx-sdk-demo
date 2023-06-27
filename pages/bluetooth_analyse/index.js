Page({

  /**
   * 页面的初始数据
   */
  data: {
    winfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let self = this
    if (options.info) {
      self.setData({
        winfo: JSON.parse(options.info)
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
  networkSuccess (e) {
    console.log('networkSuccess')
    console.log(e)
    const { detail } = e
    let item = {
      dk: detail.deviceKey,
      pk: detail.productKey,
      bindCode: detail.bindCode
    }
    wx.redirectTo({
      url: `../device_wifi_add/index?item=${JSON.stringify(item)}`
    })
  },

  back () {
    wx.redirectTo({
      url: "../bluetooth_scan/index"
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
