/* Pedir la cantidad
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{
	do
	{
		var repeticiones = prompt("Ingrese el número de repeticiones (Debe ser mayor ó igual a cero");
	}
	while(repeticiones<0);
	

	for(repeticiones > 0; repeticiones --;)
	{
		alert("Hola UTN FRA");
	}
}