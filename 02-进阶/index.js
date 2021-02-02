/*
 * @Author: zulezhe
 * @Date: 2021-01-29 16:22:41
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-02 15:48:55
 * @Description: In User Settings Edit
 * @FilePath: \canvas\02-进阶\index.js
 */
class MyCanvas {
  constructor(el, width, height) {
    this.el = document.getElementById(el);
    this.width = width;
    this.height = height;
    this.timer = null;
    this.initCanvas();
    this.drawBg();
    this.resizeChange();
  }
  initCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.el.appendChild(this.canvas);
  }
  drawBg() {
    const img = new Image();
    img.src = "./images/bg.png";
    img.onload = () => {
      const pattern = this.ctx.createPattern(img, "repeat");
      this.ctx.fillStyle = pattern;
      console.log(pattern, this.width, this.height);
      this.ctx.fillRect(0, 0, this.width, this.height);
    };
  }
  resizeChange() {
    let count = 1;
    window.addEventListener("resize", () => {
      this.timer ? window.clearTimeout(this.timer) : "";
      this.timer = setTimeout(() => {
        this.initCanvas();
        this.drawBg();
      }, 500);
    });
  }
  getContext() {
    return this.ctx;
  }
}
