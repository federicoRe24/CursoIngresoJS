/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9) 
	{
		numeroIngresado = prompt("Error, ingrese un número entre 0 y 10: ");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	txtIdNumero.value = numeroIngresado;
}