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


## Using inline-block to Create Navigation Links

~~~CSS
.nav {
  background-color: yellow;
  list-style-type: none;
  text-align: center; 
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
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