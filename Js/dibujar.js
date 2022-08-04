var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "black";

	

function dibujarOrca(){
	pincel.beginPath();
	pincel.moveTo(300, 400);
	pincel.lineTo(700, 400);
	pincel.stroke();
	pincel.moveTo(400, 400);
	pincel.lineTo(400, 50);
	pincel.lineTo(600, 50);
	pincel.lineTo(600, 100);
	pincel.stroke();
}

function dibujarCabeza(){
	pincel.beginPath();
	pincel.moveTo(625, 125);
	pincel.arc(600, 125, 25, 0, Math.PI*2, true);
	pincel.stroke();
}

function dibujarCuerpo(){
	pincel.beginPath();
	pincel.moveTo(600, 150);
	pincel.lineTo(600, 275);
	pincel.stroke();
}

function dibujarBrazoD(){
	pincel.beginPath();
	pincel.moveTo(600, 155);
	pincel.lineTo(650, 205);
	pincel.stroke();
}

function dibujarBrazoI(){
	pincel.beginPath();
	pincel.moveTo(600, 155);
	pincel.lineTo(550, 205);
	pincel.stroke();
}

function dibujarPiernaD(){
	pincel.beginPath();
	pincel.moveTo(600, 275);
	pincel.lineTo(650, 325);
	pincel.stroke();
}

function dibujarPiernaI(){
	pincel.beginPath();
	pincel.moveTo(600, 275);
	pincel.lineTo(550, 325);
	pincel.stroke();
}

function dibujarTodo(){
	if (intento == 2){
		dibujarCabeza();
	}
	if (intento == 3){
		dibujarCuerpo();
	}
	if (intento == 4){
		dibujarPiernaI();
	}
	if (intento == 5){
		dibujarPiernaD();
	}
	if (intento == 6){
		dibujarBrazoI();
	}
	if (intento == 7){
		dibujarBrazoD();
	}
}

