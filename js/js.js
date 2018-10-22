window.onload = function() {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(200,500);
ctx.lineTo(500,0);
ctx.stroke();
};