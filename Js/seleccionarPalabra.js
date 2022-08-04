var n = palabras.length;

function numeroPalabra(n) {
	return (Math.floor(Math.random()*n));
}

var respuesta = palabras[numeroPalabra(n)]; //selecciona aleatoriamente la palabra


var letraInvisible = document.querySelector("#respuesta");


function construirTd(dato, clase, id){
    var letras = document.createElement("td");
    letras.textContent = dato;
    letras.classList.add(clase);
    letras.setAttribute("id", id);

    return letras;
}


function palabraRespuesta(){
	for (var i = 0; i < respuesta.length; i++) {
		letraInvisible.appendChild(construirTd(respuesta.charAt(i),"letra-invisible", "letra-respuesta"));
	}
}

var guiones = document.querySelector("#respuestaGuiones");

function dibujarGuiones(){
	for (var i = 0; i < respuesta.length; i++) {
		guiones.appendChild(construirTd("__","guion", "guion-respuesta"));
	}
}

function inicioJuego(){
	numeroPalabra(n);
	dibujarOrca();
	palabraRespuesta();
	dibujarGuiones();
}




