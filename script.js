/*
 * @Author: zulezhe
 * @Date: 2021-05-08 16:54:00
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-05-08 18:30:00
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
        link: './' + item.title + '/' + el,
        children: [],
      });
    }
  });
});
console.log(JSON.stringify(list));
fs.writeFile('./menu.json', JSON.stringify(list), (err) => {
  if (err) throw err;
  console.log('文件的内容:');
  console.log(fs.readFileSync('./menu.json').toString());
});
