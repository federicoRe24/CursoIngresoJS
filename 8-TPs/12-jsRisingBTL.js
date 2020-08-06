/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas 
maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;

	edadIngresada = prompt("Ingrese su edad (18-90): ");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Debe ingresar una edad válida (18-90): ");
		edadIngresada = parseInt(edadIngresada);
	}

	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo (F ó M): ");
	sexoIngresado = sexoIngresado.toUpperCase();

	while(sexoIngresado != "M" && sexoIngresado != "F" )
	{
		sexoIngresado = prompt("Debe ingresar un sexo válido (F ó M): ");
		sexoIngresado = sexoIngresado.toUpperCase();
	}

	txtIdSexo.value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese su Estado Civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos): ");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Debe ingresar un Estado Civil válido (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos): ");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;

		case 2:
			estadoCivilIngresado = "Casado";
			break;
				
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
					
		case 4:
			estadoCivilIngresado = "Viudo";
			break;			
	}

	txtIdEstadoCivil.value = estadoCivilIngresado;

	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto (no menor a 8000): ");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

	while(sueldoBrutoIngresado < 8000)
	{
		sueldoBrutoIngresado = prompt("Debe ingresar un sueldo bruto válido (no menor a 8000): ");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}

	txtIdSueldo.value = sueldoBrutoIngresado;

	legajoIngresado = prompt("Ingrese su número de legajo (1000-9999): ");
	legajoIngresado = parseInt(legajoIngresado);

	while(legajoIngresado < 1000 || legajoIngresado > 9999)
	{
		legajoIngresado = prompt("Debe ingresar un número de legajo válido (1000-9999): ");
		legajoIngresado = parseInt(legajoIngresado);
	}

	txtIdLegajo.value = legajoIngresado;

	nacionalidadIngresada = prompt("Ingrese su Nacionalidad ('A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados): ");
	nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N" )
	{
		nacionalidadIngresada = prompt("Debe ingresar una Nacionalidad válida ('A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados): ");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
	}

	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "Argentino"
			break;

		case "E":
			nacionalidadIngresada = "Extranjero";
			break;

		case "N":
			nacionalidadIngresada = "Nacionalizado";
			break;
	}

	txtIdNacionalidad.value = nacionalidadIngresada;

}
