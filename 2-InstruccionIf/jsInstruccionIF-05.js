/* Re, Federico
Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

// function mostrar()
// {
// 	var edad;
// 	edad = txtIdEdad.value;

// 	edad = parseInt(edad);

// 	if(edad < 13 || edad > 17) {
		
// 		alert("Usted no es adolescente");
// 	}	
// }

function mostrar()
{
	var edad;
	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(!(edad > 12 && edad < 18))
	{	
		alert("Usted no es adolescente");
	}	
}