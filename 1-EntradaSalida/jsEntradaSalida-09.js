/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var total;

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);

	porcentaje = sueldo * 0.1;

	alert("El aumento a aplicar es de " + porcentaje);

	total = sueldo + porcentaje;

	txtIdResultado.value = total;
}
