// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
import wx from 'wepy';
import {
  baseUrl,
  appid,
  appidGuide,
  authUrl,
  regOpen,
  baseUrl2
} from './env';

function requestLoading(url, method, params, message, success, fail) {
  console.log(params)
  wx.showNavigationBarLoading()
  if (message != "") {
    // wx.showLoading({
    //   title: message,
    // })
  }
  wx.request({
    url: baseUrl + url,
    data: params,
    header: {
      'Content-Type': 'application/json'
      // 'content-type': 'application/x-www-form-urlencoded'
    },
    method: method,
    success: function (res) {
      //console.log(res.data)
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }
    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      wx.redirectTo({
        url: `/pages/error/index`,
        success: function () {},
        fail: function () {},
        complete: function () {}
      })
      if (message != "") {
        // wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    }
  })
}
export default requestLoading
