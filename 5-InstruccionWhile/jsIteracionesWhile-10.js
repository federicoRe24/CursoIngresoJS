/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{	
	var numeroIngresado; 
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta; // undefined
	// undefined null 0 false --> valores falsables.

	//iniciar variables
	contadorCeros = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	sumaNegativos = 0;
	contadorNegativos = 0;
	cantidadPares = 0;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Ingrese un número correcto");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado == 0)
		{
			contadorCeros += 1;
		}
		else
		{
			if(numeroIngresado > 0)
				{
					sumaPositivos += numeroIngresado;
					contadorPositivos += 1;
				}			
			else
			{
				sumaNegativos += numeroIngresado;
				contadorNegativos += 1;
			}

			if(numeroIngresado %2 == 0)
			{
				cantidadPares += 1;
			}

		}
		
		respuesta=confirm("¿Desea ingresar otro número?");
	}

	if(contadorNegativos == 0)
	{
		promedioNegativos = 0;
	}
	else
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
	}

	if(contadorPositivos == 0)
	{
		promedioPositivos = 0;
	}
	else
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
	}

	document.write("Suma de Negativos: " + sumaNegativos + '<br>' + "Suma de Positivos: " +  sumaPositivos + '<br>' + "Cantidad de Positivos: " +  contadorPositivos + '<br>' + "Cantidad de Negativos: " +  
	contadorNegativos + '<br>' + "Cantidad de Ceros: " +  contadorCeros + '<br>' + "Cantidad de Pares: " +  cantidadPares + '<br>' + "Promedio de Positivos: " +  promedioPositivos + '<br>' + 
	"Cantidad de Negativos: " +  promedioNegativos + '<br>' + "Positivos - Negativos: " +  (sumaPositivos-sumaNegativos));
}