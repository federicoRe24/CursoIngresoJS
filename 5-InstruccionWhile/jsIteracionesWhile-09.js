/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado; 
	var numeroMaximo; // undefined
	var numeroMinimo; // undefined
	var respuesta; // undefined
	// undefined null 0 false --> valores falsables.

	//iniciar variables
	banderaDelPrimero = true;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Ingrese un número correcto");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(banderaDelPrimero == true)
		{
			banderaDelPrimero = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}

		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta=confirm("¿Desea ingresar otro número?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}