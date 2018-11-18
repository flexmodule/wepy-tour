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
