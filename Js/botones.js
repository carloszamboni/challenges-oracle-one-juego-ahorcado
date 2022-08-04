var nuevoJuego = document.querySelector(".boton3");

var desistir = document.querySelector(".boton4");

function nuevo(){
	if(window.confirm("Desea abandonar esta partida e iniciar una nueva?")){
			document.location.reload();
	}
}

function salir(){
	if(window.confirm("Desea abandonar esta partida?")){
			window.open("index.html", "_self");
	}
}

nuevoJuego.onclick = nuevo;
desistir.onclick = salir;

function nuevoFin(){
	if(window.confirm("Desea iniciar una nueva partida?")){
			document.location.reload();
	} else {
		window.open("index.html", "_self");
	}
}

var contador = 5;

function restar(){
	contador = contador-1;
	if (contador == 0) {
		nuevoFin();
	}
}
