/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	var numeroIngresado;

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
	}
	while(isNaN(numeroIngresado));

	document.write("Números pares entre el 1 y el numero ingresado: <br>");
	
	for(var contador = 2; contador <= numeroIngresado; contador +=2)
	{
		document.write(contador + "<br>");
	}
	
	document.write("Cantidad de números pares encontrados: <br>" + (parseInt(numeroIngresado/2)));
}