var palabra = "";


function validarPalabra (palabra){
	var palabra = document.querySelector(".textoEntrada").value;
	var palabraMayuscula = palabra.toUpperCase();
	var errorCarga =[];
	
	if (palabraMayuscula.length == 0){
		errorCarga.push("La palabra no puede estar vacía");
	} else {

		if (!textoAdmitido(palabraMayuscula)){
			errorCarga.push("La palabra contiene caracteres no permitidos");
			document.querySelector(".textoEntrada").value = "";
		} else {

			if (palabraMayuscula.length == 1 && textoAdmitido(palabraMayuscula)) {
				errorCarga.push("La palabra debe contener más de una letra");
				document.querySelector(".textoEntrada").value = "";
			} else {

				if (palabraMayuscula.length > 8) {
					errorCarga.push("La palabra tiene más letras de las permitidas");
					document.querySelector(".textoEntrada").value = "";
				}			
			}	
		}	
	}

	if (textoAdmitido(palabraMayuscula) && palabraMayuscula.length > 1 && palabraMayuscula.length <= 8){
		palabras.push(palabraMayuscula);
		if(window.confirm("Desea guardar la palabra e iniciar una nueva partida?")){
			window.open("juego.html", "_self");
		};
	}

	var error =document.querySelector("#error-carga");
	error.textContent = errorCarga;
	palabra.value = "";
}

var agregarPalabra = document.querySelector(".boton1");
agregarPalabra.onclick = validarPalabra;