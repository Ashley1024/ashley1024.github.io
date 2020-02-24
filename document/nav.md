# nav

[lesson](https://freshman.tech/flexbox-navbar/)

## 去掉list内小圆点

list-style： none；


~~~CSS
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display:inline-flex;
}

a {
  text-decoration: none;
}
~~~


## 竖立nav

设置HTML{ height：100%}
a {
  text-decoration: none;
  display: block;
  padding: 2px 3px;
}

display: inline-block;效果同
display: flex;