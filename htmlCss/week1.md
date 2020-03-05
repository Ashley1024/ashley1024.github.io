# html basic knowledge

## 导入样式表

注：head中不适宜加图片等太多元素

~~~~html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sheep</title>
    <link rel="stylesheet" href="cardstyle.css">
</head>
~~~~

## selctor

### 1 #id

~~~ html
<head><style>
#para1 {
  color: red;
}
</style></head>

<body>
<h1>This is a Heading</h1>
<p id="para1">This is a paragraph.</p>
<p>This is another paragraph.</p>
</body>
~~~

### 2 .class

~~~html
<head><style>
.colortext {
  color: red;
}
</style></head>

<body>
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<p class="colortext">This is another paragraph.</p>
<p class="colortext">This is also a paragraph.</p>
</body>
~~~~

### 3 space

多层级时，用来表示下一层的是空格

~~~~html
div.text .a {
    background: palegoldenrod;
    box-sizing: content-box;
    border: 3px solid green;
    margin: 20px 10px;
}

.text .a .b {
    background: palegreen;
    box-sizing: content-box;
    border: palevioletred 3px solid;
    margin: 5px 6px;
}
~~~~

注：此处div可以省去，因为text具有唯一性
<br>
此处表示在div下text类，text类下的div的a类
要想让框居中使用 

## 居中

margin：0 auto;
margin: 1em auto; 上和下边 1字距 边距, 该盒子是水平居中的
auto
浏览器会自动选择一个合适的margin来应用。它可以用于将一个块居中。
比如，div { width:50%;  margin:0 auto; } 会把这个div容器水平居中。
只有一个  值时，这个值会被指定给全部的 四个边.
两个 值时，第一个值被匹配给 上和下, 第二个值被匹配给 左和右.
三个 值时，第一个值被匹配给 上, 第二个值被匹配给 左和右, 第三个值被匹配给 下.
四个 值时，会依次按 上、右、下、左 的顺序匹配 (即顺时针顺序).

## image

### 插入图片并调整大小

~~~~html
<div class="animal">
  <img src="sheep.png" alt="Shrek" width="490px">
</div>

~~~~

src 图片名，不在同一级是要表面路径<br>
alt 更改名，单独设置width可以不扭曲图像
在HTML中可以单独对图像div操作，再在样式表中设置居中


~~~~html
div.animal {
  margin: 10px auto;
  width: 100%;
  text-align: center;
}
~~~~

## background

img

~~~~html

body {
    background: url("images/nice.png");
    background-position: center;
}
~~~~

color
注：此处color是文字色，区分background color

~~~~html
h3 {
    background-color: #f0a733;
    color: #66200d;
    box-sizing: content-box;
    width: 100%;
    text-align: center;
    margin-top: auto;
}
~~~~

## do not leave the comment (comment code ) means do not format

## min-width start from mobile; max-width start from desk width
