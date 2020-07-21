/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{
	var edad;
	var miEstadoCivil; 

	edad = txtIdEdad.value;
	miEstadoCivil = estadoCivil.value;

	edad = parseInt(edad);

	if(edad < 18 && miEstadoCivil != "Soltero" ) 
	{		
		alert("Es muy pequeño para NO ser soltero.");
	}
}