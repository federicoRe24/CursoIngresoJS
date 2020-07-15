/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma es " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resta = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var producto;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	producto = parseInt(numeroUno) * parseInt(numeroDos);

	alert("El producto es " + producto);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var cociente;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	cociente = parseInt(numeroUno) / parseInt(numeroDos);

	alert("El cociente es " + cociente);
}

