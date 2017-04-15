//$(".btnmodelo").click(mostrarImagen);

$('#mostrarModelo').on('click', '.btnmodelo', modeloSeleccionado);

window.onload = cargarModelos();