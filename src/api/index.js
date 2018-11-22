import request from '@/utils/request.js';
var funcArr=["auth","getindexdata","getroutedata","searchInfo"];
var apifunc={}
funcArr.forEach(function(item,index){
  apifunc[item] =function item(url, oType, data) {
    return new Promise(function (resolve, reject) {
      request(
        url,
        oType,
        data,
        '请求中',
        function(res) {
          if (res.meta.success) {
            resolve(res)
          } else {
            wx.showToast({
              title: res.meta.message,
              icon: 'none',
              duration: 1000
            });
          }
        },
        function(err) {
          wx.showToast({
            title: err+",请求错误",
            icon: 'none',
            duration: 1000
          });
        }
      );
    })
  };
});
export default apifunc;
//推荐的美食
//附近的美食
//美食详情页
//收藏
//取消收藏