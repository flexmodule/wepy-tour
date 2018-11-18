/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * regOpen: 是否开放注册
 * 
 */
let baseUrl;
let routerMode;
let authUrl;
let baseUrl2;
const imgBaseUrl = 'http://192.168.2.99:8081';
let regOpen;
// baseUrl = 'http://192.168.2.99:8081';
// baseUrl = "https://uat.sssyin.cn";  
baseUrl = "https://www.sssyin.cn";
// baseUrl = "https://dsn.apizza.net/mock/dc40447c3e43b777d38d9801fff7e670"
routerMode = 'hash'
authUrl = 'http://uat.sssyin.cn/tour/static/tour.html';
regOpen = true;
baseUrl2 = 'http://192.168.2.124:8080'


export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  authUrl,
  baseUrl2,
  regOpen
}
