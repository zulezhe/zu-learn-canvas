<!--
 * @Author: zulezhe
 * @Date: 2021-01-14 08:36:09
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-02-18 17:39:34
 * @Description: In User Settings Edit
 * @FilePath: \canvas\01-基本\README.md
-->

# canvas 基本知识

## 属性:

| 属性  | 描述     | 类型   | 默认 | MDN 链接 |
| ----- | -------- | ------ | ---- | -------- |
| width | 画布宽度 | 正整数 | 150  |          |
| width | 画布高度 | 正整数 | 300  |          |

## 方法:

### 绘制线

```text
语法：
ctx.lineTo(x, y)
x轴坐标,y轴坐标
```

### 设置线宽

```text
lineWidth是设置线宽的方法
ctx.lineWidth = 5;
```

### 线的末端处样式

```text
  ctx.lineCap="round|butt|square"
  round:圆角连接
  butt:矩形连接,但不会超出原来长度
  square:矩形连接,会超出原来长度
```

### 线的连接处样式

线的连接处样式和线的末端样式概念不同,连接处是指任意两条线的相交处的样式,可以指结尾处也可以指开头处

```text
  ctx.lineJoin="round|bevel|miter"
  round : 圆角连接
  bevel:两条线相交的时候自动截取成为一个斜面
  miter:会根据两条线时自动延长形成一个尖角,会超出原线与线相交的坐标
```

### 绘制虚线

```text
ctx.setLineDash(segments);
segments:是一个由线段间隔组成的数组
```

### 绘制矩形

```text
语法：
ctx.rect(x, y, width, height)
x轴坐标,y轴坐标,矩形宽度,矩形高度

```

### 弧度和角度

1 弧度等于 1 度的圆心角所对应的弧长和半径的比值

- 弧长公式

$ I = \frac{n \times Math.PI \times r}{180} $

公式中 n 是圆心角度数，r 是半径，I 为弧长。

- 弧度公式

$ Rad = \frac{Math.PI}{180} \times n $

公式中 n 是圆心角,Rad 为弧度

### 绘制圆

```text
语法：
ctx.arc(x, y, radius, startAngle, endAngle, Boolean)
圆心坐标: (x, y)
半径: radius
起始角度: startAngle,弧度制
结束角度: endAngle,弧度制
是否逆时针旋转: false 代表顺时针旋转

```

- 绘制一个正圆

```js
ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 360);
```

- 绘制一个圆弧

```js
ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 30);
```

### 绘制一个圆角矩形

```text
ctx.atcTo(sx,sy,ex,ey,r);
sx:第二个点的x坐标
sy:第二个点的y坐标
ex:终点的x坐标
ey:终点的y坐标
r :半径
第一个点就是lineTo后的坐标点
```

### 三角函数
