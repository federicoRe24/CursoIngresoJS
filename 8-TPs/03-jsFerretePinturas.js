/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var gradosFahrenheit;
    var gradosCentigrados;

    gradosFahrenheit = txtIdTemperatura.value;

    gradosFahrenheit = parseFloat(gradosFahrenheit);

    gradosCentigrados = (gradosFahrenheit - 32) * 5/9;
    
    alert(gradosFahrenheit + " grados Fahrenheit son " + gradosCentigrados + " grados centígrados");
}

function CentigradosFahrenheit () 
{
    var gradosCentigrados;
    var gradosFahrenheit;

    gradosCentigrados = txtIdTemperatura.value;

    gradosCentigrados = parseFloat(gradosCentigrados);

    gradosFahrenheit = gradosCentigrados * 9/5 + 32;
    
    alert(gradosCentigrados + " grados centígrados son " + gradosFahrenheit + " grados Farenheit");
}
