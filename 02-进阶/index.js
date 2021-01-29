/*
 * @Author: zulezhe
 * @Date: 2021-01-29 16:22:41
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-01-29 16:48:11
 * @Description: In User Settings Edit
 * @FilePath: \canvas\02-进阶\index.js
 */
class MyCanvas {
  constructor(el, width, height) {
    this.el = document.getElementById(el);
    this.width = width;
    this.height = height;
    this.initCanvas();
  }
  initCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.el.appendChild(this.canvas);
  }
  getContext() {
    return this.ctx;
  }
}
