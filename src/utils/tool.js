//混肴密码方法
export const randomString = function (passWord) {
  let ps = passWord.split('');
  let len = ps.length * 2;
  let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  let rs = randomString.split('');
  for (var i = 0; i < randomString.length; i++) {
    if (i % 2 === 0) {
      rs[i] = ps[i / 2];
    }
  }
  return rs.join("");
}
export const tohtml = function (obj) {
  return obj.replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, "'")
  .replace(/&yen;/g, '￥')
  .replace(/&nbsp;/g, '')
  .replace(/&iexcl;/g, '?')
  .replace(/&laquo;/g, '?')
  .replace(/&not;/g, '?')
  .replace(/&middot;/g, '·')
  .replace(/&cent;/g, '￠')
  .replace(/&brvbar;/g, '|')
  .replace(/&sect;/g, '§')
  .replace(/&reg;/g, '')
  .replace(/&macr;/g, '-')
  .replace(/&deg;/g, '°')
  .replace(/&copy;/g, '')
  .replace(/&uml;/g, '¨')
  .replace(/&plusmn;/g, '±')
  .replace(/&ndash;/g, '-')
  .replace(/&mdash;/g, '-')
  .replace(/src="\//g,'src="http://www.hx-trip.cn/timages/')
  .replace(/&#39;/g, "'");
}