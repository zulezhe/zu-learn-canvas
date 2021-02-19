<!--
 * @Author: zulezhe
 * @Date: 2021-02-18 17:51:29
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-19 14:22:24
 * @Description: In User Settings Edit
 * @FilePath: \canvas\02-进阶\README.md
-->

##

### 阴影

- 阴影颜色

```js
ctx.shadowColor = "red";
```

- 阴影模糊值

```js
ctx.shadowBlur = 10;
```

- 阴影偏移量

```js
ctx.shadowOffsetX = 10;
ctx.shadowoffserY = 10;
```

### 渐变

在前面我们学习到`fillStyle`这个 api,之所以使用`style`而不是`color`就是因为`fillStyle`不仅仅能够设置颜色值,而且可以设置渐变

#### 线性渐变

```js
// 创建一个线性渐变对象,返回值为创建后的对象
// x0:起始x坐标
// y0:起始y坐标
// x1:结束x坐标
// y1:结束y坐标
const linearGradient = ctx.createLinearGradient(x0, y0, x1, y1);
// 设置渐变的颜色
ctx.addColorStop(0, "red");
ctx.addColorStop(1, "blue");
// 把渐变对象赋值给填充样式
ctx.fillStyle = "linearGradient";
```

#### 径向渐变

```js
/**
 * 创建一个径向渐变
 * x0: 起始x坐标
 * y0: 起始y坐标
 * r0: 起始径向半径
 * x1: 结束x坐标
 * y1: 结束y坐标
 * r1: 结束径向半径
 */
const radialGradiwnt = ctx.creatRadialGradient(x0, y0, r0, x1, y1, r1);
```

### 图像数据的处理

#### drawImg

从 imgData 中的特定位置取出特定范围的数据绘制到画布上

```js
const img = new Image();
img.src = "xxx.png";
img.onload = function () {
  // 三个参数,img:imgData数据 dx,需要绘制到的画布的起始x轴坐标,dy:需要绘制到的画布的起始y轴坐标
  // 这样绘制会把整个imgData绘制到画布上如果,画布比原来img小,者多余的部分不会绘制
  ctx.drawImg(img, dx, dy);
  // 五个参数 img:如上 dx:如上 dy:如上 dw:绘制到画布的宽度,会被拉伸或者压缩,dh:绘制到画布的高度
  ctx.drawImg(img, dx, dy, dw, dh);
  // 九个参数 img 如上 sx:从imgData的x轴位置取数据 sy:从imgData的y轴位置取数据,sw,从imgData取的数据的宽度
  ctx.drawImg(img, sx, sy, sw, sh, dx, dy, dw, dh);
};
```

#### putImgData

把 imgData 数据放到画布上,它和 drawImg 的区别主要在于,drawImg 是选取需要的图像数据绘制到画布上,而 putImgData 是把图像数据放到画布上,但是只显示限定的区域,

下面看详细例子

```js
// 三个参数,imgData:图像数据 dx:绘制到画布的x轴坐标,dy:绘制到画布的y轴坐标
ctx.putImgData(imgData, dx, dy);
//七个参数 imgData:图像数据 dx:绘制到画布的x轴坐标 dy:绘制到画布的y轴坐标 dirtyX:绘制到画布的imgData的显示的x轴起始坐标,dirtyY:绘制到画布的imgData的显示的y轴起始坐标
// 我们上面说了putImgData是把图像数据展示在画布上,使用dx和dy规定从画布的什么部位开始画,用dirtyX和dirtyY规定在画布绘制的图像数据的什么位置显示,然后使用dw和dh就是规定显示的大小
ctx.putImgData(imgData, dx, dy, dirtyX, dirtyY, dw, dh);
```

#### getImgData

获取 imgData 图像数据,获取画布的图像数据,获取完以后就可以使用 putImgData 来放置图像数据

```js
// 获取图像数据
const imageData = context.getImageData(0, 0, img.width, img.width);
```

#### createImgData

创建图像数据,可以生成 imgData 数据

```js
// 创建图像数据,没有设置颜色,默认是黑色
const imagedata = context.createImageData(200, 300);
// 接下来可以使用for循环给图像数据分别设置颜色数据
```

#### createPattern

图像的平铺方式

```js
// createPattern平铺方式 img:图像数据 repetition:平铺方式 repeat repeat-x repeat-y no-repeat
const pattern = context.createPattern(img, repetition);
context.fillStyle = pattern;
```

### 清除画布

clearRect()清除画布,只能矩形清除

```js
// 清除画布 x:起始x轴,y:起始y轴 w:清除的宽度 h:清除高度
ctx.clearRect(x, y, w, h);
```

### 变换

canvas 变换 ,每次变换都会改变原点坐标为最后一次停笔的坐标

### 动画

```js
  function animation(){
    
  }


```

### 椭圆

```js
// 圆心点坐标,x轴半径,y轴半径,起始角度,结束角度,是否逆时针
ctx.ellipse(x, y, xr, yr, sA, eA, booblean);
```

### 剪切

ctx.clip();根据我们绘制的路径,把路径内部的图像数据剪切下来

```js
const img = new Image();
img.src = "xxx.png";
img.onload = function () {
  // 这就算我们创建的路径
  ctx.rect(700, 100, 100, 100);
  // 根据路径进行裁剪
  ctx.clip();
  ctx.drawImg(img, 100, 100, img.width, img.height);
};
```

### 贝塞尔曲线

```js
// 一次贝塞尔曲线
ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
```

### 判断
