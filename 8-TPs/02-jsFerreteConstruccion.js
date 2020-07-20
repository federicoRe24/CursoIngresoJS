/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var hilosDeAlambre;
    var perimetro;
    var alambreTotal;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    hilosDeAlambre = 3;

    perimetro = largoTerreno * 2 + anchoTerreno * 2;
    alambreTotal = perimetro * hilosDeAlambre;

    alert("Se deberían comprar " + alambreTotal + " metros de alambre.");

}
function Circulo () 
{
    var radioTerreno;
    var hilosDeAlambre;
    var cirunferencia;
    var alambreTotal;

    radioTerreno = txtIdRadio.value;

    radioTerreno = parseInt(radioTerreno);
    hilosDeAlambre = 3;
    cirunferencia = 2 * Math.PI * radioTerreno; 

    alambreTotal = cirunferencia * hilosDeAlambre;

    alert("Se deberían comprar " + alambreTotal + " metros de alambre.");
	
}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var superficie;
    var bolsasDeCemento;
    var bolsasDeCal;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    superficie = largoTerreno * anchoTerreno;
    bolsasDeCemento = superficie * 2;
    bolsasDeCal = superficie * 3;

    alert("Se deberían comprar " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal.");

}