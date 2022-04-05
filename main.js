var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

colour="red";
Width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent="mouseDown";

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
  var  current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
   var current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown")
    {
        console.log("current positon of x and y cordinates=");
        console.log("x="+current_position_of_mouse_x+" y="+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=Width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
         
         ctx.stroke();


    }
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

function Clear_drawing() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}