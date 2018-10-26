/*window.onload = function() {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(200,500);
ctx.lineTo(500,0);
ctx.stroke();
};*/

window.onload = function(){

	init();
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

}


function init(){
	var interval = window.setInterval(function(){
		console.log("Intervalo");},1000);
	setTimeout(function(){window.clearInterval(interval);},10000);
}