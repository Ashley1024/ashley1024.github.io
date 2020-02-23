## flex manage the content inside used at row picture

main axie cross axie
in container.
display: flex;
followed

flex-direction: column;
flex-direction: row;
flex-direction: row-reverse;

justify-content: space-around; space-between; center; end; flex-end;
box : margin

if container has a height, justify-content:spcace-evenly;
aling-items:center; means in border,box change

min-width to control width,width not always show specific width.

.container {
flex-wrap: wrap;

}

caniuse.com

居中
display: flex;
justify-content；center;
align-items: center;
转向到最下线
flex-direction: row-reverse;
justify-content: center;
align-items: flex-end;
flex-wrap: wrap;
flex-flow: column wrap

flex-direction:row; row-reverse;column;column-reverse;
justify-content: flex-start; flex-end;center;space-between; space-around;
align-items: flex-start; flex-end;center;baseline; stretch

Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).
