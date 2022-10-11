const plugin = requirePlugin('quecPlugin')
import env from '../env.js'
/**
 * 设置未读消息数量
 * @param {*} obj 
 */
export function setMsgNum (obj) {
  plugin.quecMsg.getMsgNoReadList({
    success (res) {
      obj.getTabBar().setData({
        MsgNum: res.data.total
      })
    },
    fail (res) {
      obj.getTabBar().setData({
        MsgNum: 0
      })
    }
  })
}
/**
 * 设置未读消息数量清零
 * @param {*} obj 
 */
export function setMsgNumZoro (obj) {
  obj.getTabBar().setData({
    MsgNum: 0
  })
}

export function toLogin () {
  plugin.config.setUserInfo('')
  wx.redirectTo({
    url: '/pages/login/index'
  })
}

export function getEnvConfig () {
  let appid = wx.getAccountInfoSync().miniProgram.appId
  console.log(env[appid])
  return env[appid]
}
