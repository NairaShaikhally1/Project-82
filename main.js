canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mouseevent="";
lastposX=0
lastposY=0
color="red"
radius=30
linewidth=4

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("textinputcolor").value ;
    radius=document.getElementById("textinputradius").value ;
    linewidth=document.getElementById("textinputwidth").value ;
    mouseevent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
console.log(mouseevent)

canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentposX=e.clientX-canvas.offsetLeft
    currentposY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=linewidth

        ctx.arc(currentposX,currentposY,radius,0,2*Math.PI)
        ctx.stroke()
    }
    lastposX=currentposX
    lastposY=currentposY

}