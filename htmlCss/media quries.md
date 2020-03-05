# Media Quries

~~~css
@media only screen and (min-width: 600px) {

~~~

## 

in css  after two box 

~~~~html
.box1 {
  margin: auto;
  width: 600px;
  height: 300px;
  background: red;
}
.box2 {
  margin: auto;
  width: 600px;
  height: 300px;
  background: bl
  ue;
}
@media only  screen and (min-width: 600px) {

  .box1 {
  background: yellow;
  }
  .box2 {
  background: black;
  }  
}


~~~~
or max-width

.box1, .box2

You can also have different stylesheets for different media, like this:

~~~html
<link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
....

##
display: none;
display: block;
first phone screen
seccond desktop



#

## responsive

### meta

F11 two phone can see responsive,and can adjust

~~~~html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
this code is used to responsive web, good for looking
~~~~

### width an maxwidth

max-width can be more responsive and change with the window
but width do not change
min-width never less than 300px
in homework the maxwidth is 800px

### different responsive design pattern

1. tiny tweaks ,just change the font

### reset css 

1. you can only copy the link of css reset to head 
2. check in F11 ,style.
   
