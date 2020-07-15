/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert("La suma de los precios ingresados es " + suma);
    
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioPromedio;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    precioPromedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los precios ingresados es " + precioPromedio);
	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioSinIva;
    var iva;
    var precioMasIva;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    precioSinIva = precioUno + precioDos + precioTres;

    iva = precioSinIva * 0.21;

    precioMasIva = precioSinIva + iva;

    alert("El precio final (IVA incluído) es " + precioMasIva);
	
}