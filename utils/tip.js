/**
 * 
 * @param {*} msg（Sting） - 弹出消息文案
 * @param {*} icon（Sting） - icon 图标
 */
export function tip (msg, icon) {
  wx.showToast({
    title: msg,
    icon: icon ? icon : 'none',
    duration: 2000
  })
}

/**
 * 隐藏提示框
 */
export function hideTip () {
  wx.hideToast()
}
