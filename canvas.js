var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var btn = document.getElementById("clearbtn");
var mousex, mousey;
var lastpos = -1;

ctx.beginPath();

canvas.addEventListener("click", function(e){
    ctx.lineTo(mousex, mousey);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mousex, mousey, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#AAAAAA";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(mousex,mousey);
});

//Draw rect
/*
canvas.addEventListener("click", function(e) {
    if (lastpos != -1) {
        ctx.beginPath();
        ctx.moveTo(lastpos[0],lastpos[1]);
        ctx.lineTo(mousex, mousey);
        ctx.stroke();
    }
    lastpos = [mousex,mousey];
});
*/
canvas.addEventListener("mousemove", function(e) {
    mousex = e.offsetX;
    mousey = e.offsetY;
});

btn.addEventListener("click", function(e) {
    ctx.clearRect(0,0, width, height);
    ctx.beginPath();
    lastpos = -1;

});
