/* al presionar el botón repetir hasta que utilizamos 'BREAK'. */

function mostrar()
{
	for(var ingreso; ingreso != "BREAK";)
	{
		ingreso = prompt("Para dejar de repetir, ingrese la palabra BREAK: ");
		ingreso = ingreso.toUpperCase();
	}
}