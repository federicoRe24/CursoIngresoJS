/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error, ingrese un sexo válido (f ó m): ")
	}

	if(sexoIngresado == "f")

	//terminar switch, while y tp13.

	txtIdSexo.value=sexoIngresado;
}