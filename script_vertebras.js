/* =========================
   CAMBIAR COLOR TABLA
========================= */

function cambiarColorTabla(){

	let tabla = document.querySelector(".tabla-peces table");

	if(!tabla) return;

	tabla.classList.toggle("tabla-clara");
}