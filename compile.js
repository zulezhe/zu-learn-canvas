/*
 * @Author: zulezhe
 * @Date: 2021-05-08 16:54:00
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-05-20 09:06:02
 * @Path: https://gitee.com/zulezhe/
 * @Description: $
 */
const fs = require('fs');
const path = require('path');
let list = [];
let files = fs.readdirSync('./');
files.map((item, i) => {
  if (item.includes('0')) {
    list.push({
      id: i,
      title: item,
      link: '',
      children: [],
    });
  }
});
list.map((item, i) => {
  var filename = path.join(__dirname, item.title);
  let a = fs.readdirSync(filename);
  a.map((el, k) => {
    if (el.includes('0') || el.includes('html')) {
      item.children.push({
        id: item.id + '-' + k,
        title: el,
        link: '../' + item.title + '/' + el,
        children: [],
      });
    }
  });
});
fs.writeFile('./template/menu.json', JSON.stringify(list), (err) => {
  if (err) throw err;
  console.log('%o', '目录编译成功,请运行 npx dev 查看页面');
});
