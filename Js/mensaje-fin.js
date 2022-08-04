function escribirTexto(texto, color){
		var pantalla = document.querySelector("canvas");
		var pincel = pantalla.getContext("2d");	

		pincel.fillStyle = "rgba(191,191,191,0.4)";
		pincel.fillRect(0,0,1200,600);
		pincel.shadowBlur = 5;
		pincel.shadowOffsetX = 2;
		pincel.shadowOffsetY = 2;
		pincel.font = "bold 4em Inter";
		pincel.textAlign ="center";
		pincel.fillStyle = color;
		pincel.fillText(texto, 600, 150);
	}