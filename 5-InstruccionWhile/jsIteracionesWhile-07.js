/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="Y";

	while(respuesta == "Y")
	{
		do
		{	
			numeroIngresado = prompt("Ingrese un número: ");			
		}
		while(isNaN(numeroIngresado));

		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador += 1;

		do
		{
			respuesta =  prompt("Ingrese 'Y' si desea seguir ingresando números o 'N' para terminar: ");
			respuesta = respuesta.toUpperCase();
		}
		while(respuesta != "Y" && respuesta != "N");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;
}