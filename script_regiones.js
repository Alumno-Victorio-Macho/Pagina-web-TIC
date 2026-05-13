/* MOSTRAR / OCULTAR MAPA */

function mostrarMapa(){

	let mapa = document.getElementById("mapa");

	mapa.classList.toggle("oculto");
}

/* CAMBIO DE MAPA */

let mapaOriginal = true;

function cambiarMapa(){

	let mapa = document.getElementById("mapa");

	if(mapaOriginal){
		mapa.src = "imagenes/mapa_alternativo.jpg";
	}else{
		mapa.src = "imagenes/mapa_completo.jpg";
	}

	mapaOriginal = !mapaOriginal;
}