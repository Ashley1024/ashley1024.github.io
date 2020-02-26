# display

## block level element

1. div
2. h1
3. p
4. form, header,footer,section
5. li 

## in-line element

1. span, a ,img

## change display

Override The Default Display Value
As mentioned, every element has a default display value. However, you can override this.
Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

~~~css
li {
  display: inline;
}

span {
  display: block;
}

a {
  display: block;
}

h1.hidden {
  display: none;
}
~~~