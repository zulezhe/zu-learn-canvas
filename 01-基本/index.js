/*
 * @Author: zulezhe
 * @Date: 2021-01-18 16:29:39
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-01-18 17:04:19
 * @Description: In User Settings Edit
 * @FilePath: \canvas\01-基本\index.js
 */

(function (global) {
  console.log(global);
  let startTime = new Date();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  global.ctx = ctx;
  let body = document.body;
  let width = body.offsetWidth;
  let height = body.offsetHeight;
  console.log(width, height);
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  for (let i = 0; i < width; i++) {
    ctx.moveTo(0, i * 10 - 0.5);
    ctx.lineTo(width, i * 10 - 0.5);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
  }
  for (let i = 0; i < height; i++) {
    ctx.moveTo(i * 10 - 0.5, 0);
    ctx.lineTo(i * 10 - 0.5, height);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
  }
  let endtTime = new Date();
  console.log("用了", +(endtTime - startTime) / 1000 + "秒");
})(window);
