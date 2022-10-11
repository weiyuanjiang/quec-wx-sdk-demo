Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRefresh: false,
    scrollHeight: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let self = this
    const windowInfo = wx.getWindowInfo()
    self.setData({
      scrollHeight: windowInfo.safeArea.bottom - 60 - 100
    })
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
    let self = this
    if (typeof self.getTabBar === 'function' && self.getTabBar()) {
      self.getTabBar().setData({
        selected: 0
      })

      self.setData({
        isRefresh: true
      })

    }
  },
  /**
  * 去设备详情
  */
  goDetail (e) {
    wx.navigateTo({
      url: `../device_detail/CommonDetail/index?item=${encodeURIComponent(JSON.stringify(e.detail.item))}`,
    })
  },
  /**
   * 去分享页面
   */
  goShare (e) {
    wx.navigateTo({
      url: `../device_share/index?item=${encodeURIComponent(JSON.stringify(e.detail))}`,
    })
  },
  /**
    * 去添加设备页面
    */
  scanSuccess (e) {
    wx.navigateTo({
      url: '../device_add/index?item=' + JSON.stringify(e.detail),
    })
  },

  /**
   * 设备添加成功
   */
  addSuccess () {
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 重命名成功
   */
  renameSuccess () {
    this.setData({
      isRefresh: true
    })
  },

  /***
   * 删除成功
   */
  unbindSuccess () {
    this.setData({
      isRefresh: true
    })
  },

  /**
   * 重命名设备无效时跳转到设备列表
   */
  invalidDevice (e) {
    this.setData({
      isRefresh: true
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
