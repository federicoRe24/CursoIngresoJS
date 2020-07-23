/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var precioFinal;
    var ingresosBrutos;

    cantidadLamparas = txtIdCantidad.value;
    marcaLamparas = Marca.value;

    cantidadLamparas = parseInt(cantidadLamparas);
    precioFinal = cantidadLamparas * 35;

    if(cantidadLamparas >= 6)
    {
        precioFinal *= 0.5;
    }

    else
    {
        if (cantidadLamparas == 5)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                precioFinal *=  0.6;     
            }
            else
            {
                precioFinal *=  0.7;  
            }
        }

        if (cantidadLamparas == 4)
        {
            if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
            {
                precioFinal *= 0.75;     
            }
            else
            {
                precioFinal *= 0.8;
            }
        }

        if (cantidadLamparas == 3)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                precioFinal *= 0.85;     
            }
            else
            {
                if(marcaLamparas == "FelipeLamparas")
                {
                    precioFinal *= 0.9; 
                }
                else
                {
                    precioFinal *= 0.95; 
                }
            }

        }
    }


    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 0.1;
        precioFinal += ingresosBrutos;
        alert("Usted pago " + ingresosBrutos + " de IIBB.");
    }

    txtIdprecioDescuento.value = precioFinal;
 	
}


function CalcularPrecioConSwitch () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var precioFinal;
    var ingresosBrutos;

    cantidadLamparas = txtIdCantidad.value;
    marcaLamparas = Marca.value;

    cantidadLamparas = parseInt(cantidadLamparas);
    precioFinal = cantidadLamparas * 35;

    if(cantidadLamparas > 2)
    {
        switch(cantidadLamparas)
        {
            case 3:
            {
                if(marcaLamparas == "ArgentinaLuz")
                {
                    precioFinal -= precioFinal * 0.15;     
                }
                else
                {
                    if(marcaLamparas == "FelipeLamparas")
                    {
                        precioFinal -= precioFinal * 0.1;
                    }
                    else
                    {
                        precioFinal -= precioFinal * 0.05;
                    }
                }
                break;
            }

            case 4:
            {
                if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    precioFinal -= precioFinal * 0.25;     
                }
                else
                {
                    precioFinal -= precioFinal * 0.2;
                }
                break;
            }

            case 5:
            {
                if(marcaLamparas == "ArgentinaLuz")
                {
                    precioFinal -= precioFinal * 0.4;     
                }
                else
                {
                    precioFinal -= precioFinal * 0.3;
                }
                break;
            }    
            
            default:
                precioFinal -= precioFinal * 0.5;
        
        }
    }

    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 0.1;
        precioFinal += ingresosBrutos;
        alert("Usted pago " + ingresosBrutos + " de IIBB.");
    }

    txtIdprecioDescuento.value = precioFinal;
 	
}
