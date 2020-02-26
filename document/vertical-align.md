# 垂直居中

设置容器上下 padding 相同实现垂直居中和使用 line-height=height 实现垂直居中仅对单行文本有效，当文本行数超过单行时：

 1）padding：文本仍然处于容器垂直居中的位置，但是容器的 height 会随着文本行数的增加而增大；
 2）line-height=height：容器的 height 不变，line-height 是文本的行间距，文本会溢出容器显示；
多行文本可使用 vertical-align: middle; 来实现元素的垂直居中，但是如果子元素的内容体积大于父元素的内容体积时，仍然会溢出，后面需要使用文字溢出处理来解决。