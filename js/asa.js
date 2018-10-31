/*

window.onload = function() {

	//Inicializar variables
	var cv = document.getElementById('myGame'),ctx = cv.getContext("2d");

	var innerWidth = 360,innerHeight = 620;
	cv.width = innerWidth;
	cv.height = innerHeight;

	this.interval = setInterval(animate, 2);

	window.addEventListener('keydown', function (e) {
		myGameArea.keys = (myGameArea.keys || []);
		myGameArea.keys[e.keyCode] = (e.type == "keydown");
	})
	window.addEventListener('keyup', function (e) {
		myGameArea.keys[e.keyCode] = (e.type == "keydown");            
	})




	//Crear nave
	var nave = {},nave_width = 100,nave_height = 105,nave_img = new Image();
	nave_img.src="img/nave.png";
	nave = { 
		width: nave_width,
		height: nave_height,
		x : innerWidth/2 - (nave_width/2),
		y : innerHeight - (nave_height+10),
		power : 10,
		draw: function(){
			ctx.drawImage(nave_img,this.x,this.y,this.width,this.height);
		}

	};

	//Animaciones
	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0,0,cv.width,cv.height);
		nave.draw();
	}
	animate();

};*/

