/* al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

function mostrar()
{
	// Pongo el 9 como string, porque si lo dejo numérico el usuario puede ingresar 09, ó 009, etc. y con eso terminar la ejecución.
	for(var ingreso; ingreso != "9";)
	{
		ingreso = prompt("Para terminar, ingrese 9: ");
	}
}