/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche */


function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var seViaja;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					seViaja = true;
					break;

				default:
					seViaja = false;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					seViaja = true;
					break;
		
				default:
					seViaja = false;
					break;
			}
			break
		
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					seViaja = false;
					break;

				default:
					seViaja = true;
					break;
			}
			break;

		case "Otoño":
			seViaja = true;
			break;

	}

	if(seViaja == true)
	{
		alert("Se viaja");
	}
	else
	{
		alert("No se viaja");
	}
}