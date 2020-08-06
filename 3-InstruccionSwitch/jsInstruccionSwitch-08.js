/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío.");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor.");
			break;
	}
}