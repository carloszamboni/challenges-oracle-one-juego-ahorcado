var intento = 1;

var letraEquivocada = [];

var letraAdivinada = [];

var equivocadas = document.querySelector("#letraIncorrecta");

var letraIngresada = document.querySelector("#ingresoLetra");
letraIngresada.focus();

var errorLetra = document.querySelector("#errorIngreso");

var repetidas = [];

var nLetra = [];

	
letraIngresada.addEventListener("input", function(){
	
	var letraMayuscula = this.value.toUpperCase();

	if (textoAdmitido(letraMayuscula)) {

		if(!letraEquivocada.includes(letraMayuscula) && !letraAdivinada.includes(letraMayuscula)){
		for (var i = 0; i < respuesta.length; i++) {

			var letrasPalabra = letraInvisible.cells[i];
			
														
			if (letraMayuscula == respuesta.substring(i, i+1)) {
				nLetra.push(respuesta.substring(i, i+1));
				letraAdivinada.push(respuesta.substring(i, i+1));
				letrasPalabra.classList.remove("letra-invisible");
				if (intento < 7 && letraAdivinada.length == respuesta.length) {
					escribirTexto("Ganaste, felicidades!!!", "green");
					var temporizador = setInterval(function(){restar()},500);
				}
			} 
		}

		if (nLetra.length > 0) {
			nLetra = [];
			repetidas = [];
			errorLetra.textContent = "";
			letraIngresada.value = "";
		} else {
			nLetra = [];
			intento++;
			dibujarTodo();
			repetidas = [];
			errorLetra.textContent = "";
			letraEquivocada.push(letraMayuscula);
			equivocadas.textContent = letraEquivocada;
			letraIngresada.value = "";
			if (intento ==7) {
				escribirTexto("Fin de juego", "red");
				var temporizador = setInterval(function(){restar()},500);
				}
			}
		} else {
			repetidas = [];
			repetidas.push("La letra "+ letraMayuscula +" ya fue ingresada");
			errorLetra.textContent = repetidas;
			letraIngresada.value = "";
		
		}

	} else {
		repetidas = [];
		repetidas.push("El caracter "+ letraMayuscula +" no esta admitido");
		errorLetra.textContent = repetidas;
		letraIngresada.value = "";
	}
})

	
	
