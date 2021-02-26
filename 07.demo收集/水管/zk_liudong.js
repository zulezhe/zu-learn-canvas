/*
 * @Author: zulezhe
 * @Date: 2021-02-23 09:31:03
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-23 09:31:11
 * @Description: In User Settings Edit
 * @FilePath: \canvas\07.demo收集\水管\zk_liudong.js
 */
//构造函数
function Createline(config) {
  this.c = 0;
  this.lines = [];
  var self = this;
  //初始化线
  (function (self) {
    if (config.fx == "w") {
      var number = config.canvas_w / (config.width + config.width / 2 + config.jiange * 2);
      number = Math.ceil(number) + 1;
      for (var n = 0; n < number; n++) {
        var mxx = config.canvas_w - n * (config.width + config.width / 2 + config.jiange * 2);
        var lines_data = {
          mx: mxx,
          lx: mxx - config.width,
          my: config.my,
          ly: config.ly,
          vx: config.vx,
          vy: config.vy,
        };
        self.lines.push(lines_data);
        var lines_data2 = {
          mx: mxx - config.width - config.jiange,
          lx: mxx - config.width - config.jiange - config.width / 2,
          my: config.my,
          ly: config.ly,
          vx: config.vx,
          vy: config.vy,
        };
        self.lines.push(lines_data2);
      }
    }
    if (config.fx == "h") {
      var number = config.canvas_w / (config.width + config.width / 2 + config.jiange * 2);
      number = Math.ceil(number) + 1;
      for (var n = 0; n < number; n++) {
        var myy = config.canvas_h - n * (config.width + config.width / 2 + config.jiange * 2);
        var lines_data3 = {
          mx: config.mx,
          lx: config.lx,
          my: myy,
          ly: myy - config.width,
          vx: config.vx,
          vy: config.vy,
        };
        self.lines.push(lines_data3);
        var lines_data4 = {
          mx: config.mx,
          lx: config.lx,
          my: myy - config.width - config.jiange,
          ly: myy - config.width - config.jiange - config.width / 2,
          vx: config.vx,
          vy: config.vy,
        };
        self.lines.push(lines_data4);
      }
    }
  })(self);
}
//开始
Createline.prototype.begin = function (element, config) {
  var canvasObj = document.getElementById(element);
  var self = this;
  var canvas = {
    line_w: config.line_w || 3, //线条厚度
    vx: config.vx || 0, //x轴运动速度
    vy: config.vy || 0, //Y轴速度
    color: config.color || "blue", //线条颜色
    canvas_w: config.canvas_w || 0, //画布宽度
    canvas_h: config.canvas_h || 0, //画布高度
    mx: config.mx || 0, //线的开始位置X坐标
    my: config.my || 0, //线的开始位置Y坐标
    lx: config.lx || 0, //线的结束位置X坐标
    ly: config.ly || 0, //线的结束位置Y坐标
    fx: config.fx || "w", //运动方向 w 水平 ，h: 垂直
    width: config.width || 20, //线的长度
    jiange: config.jiange || 10, //线的间隔
  };
  if (canvasObj.getContext("2d")) {
    (canvas.ctx = canvasObj.getContext("2d")), (canvasObj.width = canvas.canvas_w);
    canvasObj.height = canvas.canvas_h;
  } else {
    console.log("当前环境不支持canvas");
    return null;
  }
  setInterval(function () {
    self.createline(self, canvas);
    if (canvas.fx == "w") {
      self.updateline_w(self, canvas);
    }
    if (canvas.fx == "h") {
      self.updateline_h(self, canvas);
    }
    self.addline(self, canvas);
  }, config.time);

  return canvas.ctx;
};
//画线
Createline.prototype.createline = function (self, canvas) {
  var content = canvas.ctx;
  content.clearRect(0, 0, canvas.canvas_w, canvas.canvas_h);
  for (var i = 0; i < self.lines.length; i++) {
    content.beginPath();
    content.moveTo(self.lines[i].mx, self.lines[i].my);
    //线经过的转折点或结束点
    content.lineTo(self.lines[i].lx, self.lines[i].ly);
    //线条宽度
    content.lineWidth = canvas.line_w;
    content.strokeStyle = canvas.color;
    content.stroke();
    //线条颜色
    content.closePath();
    //画线
  }
};
//改变数据 水平运动
Createline.prototype.updateline_w = function (self, canvas) {
  for (var i = 0; i < self.lines.length; i++) {
    self.lines[i].mx = self.lines[i].mx + self.lines[i].vx;
    self.lines[i].lx = self.lines[i].lx + self.lines[i].vx;
  }
  //超出画布的线条从数组内删除，减少系统消耗
  var cnt = [];
  for (var j = 0; j < self.lines.length; j++) {
    if (self.lines[j].lx > canvas.canvas_w) {
      cnt.push(j);
    }
  }
  for (var k = 0; k < cnt.length; k++) {
    self.lines.splice(k, 1);
  }
};

//改变数据 垂直运动
Createline.prototype.updateline_h = function (self, canvas) {
  for (var i = 0; i < self.lines.length; i++) {
    self.lines[i].my = self.lines[i].my + lines[i].vy;
    self.lines[i].ly = self.lines[i].ly + lines[i].vy;
  }
  //超出画布的线条从数组内删除，减少系统消耗
  var cnt = [];
  for (var j = 0; j < self.lines.length; j++) {
    if (self.lines[j].ly > canvas.canvas_h) {
      cnt.push(j);
    }
  }
  for (var k = 0; k < cnt.length; k++) {
    self.lines.splice(k, 1);
  }
};
//增加线
Createline.prototype.addline = function (self, canvas) {
  var length = self.lines.length;
  //横线
  if (canvas.fx == "w") {
    //判断是否需要生成线
    if (self.lines[length - 1].lx > 0) {
      //起点位置 等于 左右一根线的坐标减去间隔
      var ww = self.lines[length - 1].lx - canvas.jiange;
      //判断长短
      if (self.c == 0) {
        var jg = canvas.width;
        self.c = 10;
      } else {
        var jg = canvas.width / 2;
        self.c = 0;
      }
      var lxx = ww - jg;

      var data = {
        mx: ww,
        lx: lxx,

        my: canvas.my,
        ly: canvas.ly,
        vx: canvas.vx,
        vy: canvas.vy,
      };
      self.lines.push(data);
    }
  }

  //垂直
  if (canvas.fx == "h") {
    if (length > 0) {
      //判断是否需要生成线
      if (self.lines[length - 1].ly > 0) {
        //起点位置 等于 左右一根线的坐标减去间隔
        var my = self.lines[length - 1].ly - canvas.jiange;
        //判断长短
        if (c == 0) {
          var jg = canvas.width;
          c = 10;
        } else {
          var jg = canvas.width / 2;
          c = 0;
        }
        var ly = my - jg;

        var data = {
          mx: canvas.mx,
          lx: canvas.lx,
          my: my,
          ly: ly,
          vx: canvas.vx,
          vy: canvas.vy,
        };
        self.lines.push(data);
      }
    } else {
      var data = {
        mx: canvas.mx,
        my: canvas.my,
        lx: canvas.lx,
        ly: canvas.ly,
        vx: canvas.vx,
        vy: canvas.vy,
      };

      self.lines.push(data);
    }
  }
};
