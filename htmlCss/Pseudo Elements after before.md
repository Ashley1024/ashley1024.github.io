# pseudo element

## :before 伪元素

":before" 伪元素可以在元素的内容前面插入新内容。

下面的例子在每个 <h1>元素前面插入一幅图片：

~~~css

h1:before {
    content:url(smiley.gif);
}
h1:after {
    content:url(smiley.gif);
}
~~~

尝试一下 »

CSS - :after 伪元素
":after" 伪元素可以在元素的内容之后插入新内容。

下面的例子在每个 <h1> 元素后面插入一幅图片：

