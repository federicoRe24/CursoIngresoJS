/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var sumaPositivos;
	var productoNegativos;
	var respuesta;
	var numeroIngresado;

	sumaPositivos = 0;
	productoNegativos = 1;
	respuesta = "Y";

	while(respuesta == "Y")
	{
		do
		{	
			numeroIngresado = prompt("Ingrese un número: ");			
		}
		while(isNaN(numeroIngresado));

		numeroIngresado = parseInt(numeroIngresado);

		// Tomo el 0 como positivo para simplificar y que no me anule la multiplicación.
		if(numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			productoNegativos *= numeroIngresado;
		}

		do
		{
			respuesta =  prompt("Ingrese 'Y' si desea seguir ingresando números o 'N' para terminar: ");
			respuesta = respuesta.toUpperCase();
		}
		while(respuesta != "Y" && respuesta != "N");
	}

	if(productoNegativos == 1) productoNegativos = 0;

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = productoNegativos;
}