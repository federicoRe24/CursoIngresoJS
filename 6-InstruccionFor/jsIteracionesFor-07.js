/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados. */

function mostrar()
{
	var numeroIngresado;
	var contadorDivisores;

	contadorDivisores = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
	}
	while(isNaN(numeroIngresado));

	document.write("Divisores del número ingresado: <br>");

	for(var i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado%i == 0)
		{
			document.write(i + "<br>");
			contadorDivisores += 1;
		}
	}

	document.write("Cantaidad de Divisores: " + contadorDivisores);
}