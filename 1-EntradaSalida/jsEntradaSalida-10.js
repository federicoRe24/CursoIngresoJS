/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	descuento = importe * 0.25;

	// Mostrar con alert() el aumento o descuento que se calculó.
	alert("El descuento es de " + descuento);

	resultado = importe - descuento;

	txtIdResultado.value = resultado;
}
