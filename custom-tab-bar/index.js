
Component({
  data: {
    selected: null,
    color: "#646464",
    selectedColor: "#3C3C3C",
    borderStyle: "white",
    backgroundColor: "#ffffff",
    list: [
      {
        "pagePath": "/pages/home/home",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home_selected.png",
        "text": "首页"
      },
      {
        "selectedIconPath": "/images/msg_selected.png",
        "iconPath": "/images/msg.png",
        "pagePath": "/pages/msg/index",
        "text": "消息"
      },
      {
        "selectedIconPath": "/images/mine_selected.png",
        "iconPath": "/images/mine.png",
        "pagePath": "/pages/mine/mine",
        "text": "我的"
      }
    ],
  },
  methods: {
    /**
     * tabbar切换
     */
    switchTab (e) {
      wx.switchTab({
        url: e.currentTarget.dataset.path,
      })
    }
  }
})
