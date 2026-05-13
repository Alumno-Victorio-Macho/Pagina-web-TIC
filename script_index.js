let modoClaro = false;

/* Cambio entre claro y oscuro */
function cambiarModo(){
	let body = document.body;
	if(modoClaro){
		body.classList.remove("modo-claro");
	}else{
		body.classList.add("modo-claro");
	}
	modoClaro = !modoClaro;
}

/* Cambio de banner */
function banner1(){
	let banner = document.querySelector(".banner img");
	banner.src = "imagenes/dredge.jpg";
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
}

function banner2(){
	let banner = document.querySelector(".banner img");
	banner.src = "imagenes/dredge2.png";
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
}

/* Geolocalizacion */
function obtenerUbicacion(){
	let salida = document.getElementById("ubicacion");
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(pos){
				let lat = pos.coords.latitude;
				let lon = pos.coords.longitude;

				salida.innerHTML = "📍 Latitud: " + lat + "<br>📍 Longitud: " + lon;
			},
			function(){
				salida.innerHTML = "No se pudo obtener la ubicación.";
			}
		);
	}else{
		salida.innerHTML = "Tu navegador no soporta geolocalización.";
	}
}