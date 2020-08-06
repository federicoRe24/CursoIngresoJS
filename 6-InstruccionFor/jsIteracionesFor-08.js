/* al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */

function mostrar()
{
	var numeroIngresado;
	var contadorDivisores;

	contadorDivisores = 0;

	numeroIngresado = prompt("Ingrese un número: ");
	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado))
	{
		numeroIngresado = prompt("Debe ingresar un número válido: ");
		numeroIngresado = parseInt(numeroIngresado);
	}
	

	for(var i = 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado%i == 0)
		{
			contadorDivisores += 1;
			break;
		}
	}

	if(contadorDivisores > 0)
	{
		alert("El número ingresado no es primo");
	}
	else
	{
		alert("El número ingresado es primo");
	}
}