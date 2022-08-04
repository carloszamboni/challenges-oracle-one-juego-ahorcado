function textoAdmitido(string){
	var salida = [];
	var filtro = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

	for (var i = 0; i < string.length; i++) {
		if (filtro.includes(string.charAt(i))) {
			salida.push(string.charAt(i));
		}
	}

	if(salida.length < string.length){
		return false;
	} else {
		return true;
	}
}
