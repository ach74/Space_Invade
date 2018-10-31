





var myGamePiece;
var myObstacle;
var municion = [];

function startGame() {
	myGameArea.start();
	
	myGamePiece = new component(30, 30, "img/nave.png", myGameArea.canvas.width/2, myGameArea.canvas.height-50, "image");

	myObstacle  = new disparo(1, 10, "green", myGamePiece.x+15, myGamePiece.y-20); 
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 300;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 2);
		window.addEventListener('keydown', function (e) {
			myGameArea.keys = (myGameArea.keys || []);
			myGameArea.keys[e.keyCode] = (e.type == "keydown");
		})
		window.addEventListener('keyup', function (e) {
			myGameArea.keys[e.keyCode] = (e.type == "keydown");    
		})
	}, 
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function component(width, height, color, x, y,type) {
	this.type = type;
	//Condicion para insertar la
	if (type=="image") {
		this.image = new Image();
		this.image.src=color;
	}
	this.gamearea = myGameArea;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;    
	this.x = x;
	this.y = y;    
	this.update = function() {
		ctx = myGameArea.context;
		//Insertar imagen
		if (type == "image") {
			ctx.drawImage(this.image, 
				this.x, 
				this.y,
				this.width, this.height);
		} else {
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
		if (this.x==0) {
			this.x=1;
		}else if(this.x==270){
			this.x=269;
		}
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;        
	}    
}


function disparo(width, height, color, x, y,type) {
	ctx = myGameArea.context;
	this.type = type;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;    
	this.speedX = 0;
	this.speedY = 0;    
	this.update = function() {
		
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		ctx.clearRect(this.x,this.y,this.width,this.height);

		this.y += this.speedY - 0.5;  

		this.update();      
	}

}

function updateGameArea() {
	myGameArea.clear();
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;    
	if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
	if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1;}

	if (myGameArea.keys && myGameArea.keys[32]) {
		myObstacle  = new disparo(1, 1, "green", myGamePiece.x+15, myGamePiece.y-20); 
		myGameArea.clear();
		municion.push(myObstacle);
	}

	actualizarDisparos();

	myGamePiece.newPos();    
	myGamePiece.update();
} 

function actualizarDisparos(){
	for(var i = 0; i < municion.length; i++){
		municion[i].newPos();
	}
}