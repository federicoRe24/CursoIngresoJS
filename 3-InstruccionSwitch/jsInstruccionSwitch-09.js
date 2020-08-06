/* Federico Re
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar()
{
	var estacionIngresada;
	var destino;
	var precioFinal;
	var variablePrecio;

	estacionIngresada =txtIdEstacion.value;
	destino = txtIdDestino.value;
	precioFinal = 15000; 

	switch(estacionIngresada)
	{
		case "Invierno":

			switch(destino)
			{
				case "Bariloche":
					variablePrecio = 1.2;
					break;

				case "Cataratas":	
				case "Cordoba":
					variablePrecio = 0.9;
					break;

				case "Mar del plata":
					variablePrecio = 0.8;
					break;
			}
			break;

		case "Verano":

			switch(destino)
			{
				case "Bariloche":
					variablePrecio = 0.8;
					break;

				case "Cordoba":
				case "Cataratas":	
					variablePrecio = 1.1;
					break;

				case "Mar del plata":
					variablePrecio = 1.2;
					break; 
			}
			break;	
			
		case "Otoño":
		case "Primavera":	

			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":	
					variablePrecio = 1.1;
					break;

				case "Cordoba":
					variablePrecio = 1;
					break;
			}
			break;
	}

	precioFinal *= variablePrecio;
	alert("El precio final es " + precioFinal);

}