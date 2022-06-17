/*
Ejercicio general 0
Crear una pagina que muestre 3 productos comestibles y que permita al cliente 
elegir alguno para comprar, además de la cantidad a agregar del mismo al carrito de compra, 
el producto a comprar deberia poder pagarse en 1,3 y hasta 6 cuotas si es con 
tarjeta de credito y en un pago con efectivo ofreciendo en este caso un descuento del 20% 
Al finalizar la compra debera figurar una factura informando la cantidad, costo individual, 
el costo a pagar total, el tipo de pago y la forma a pagar segun corresponda

Tener en cuenta que solo se podra pagar en 3 cuotas si se compran 3 productos o más, 
en 6 cuotas si se compran más de 7 productos

-poner precio a los productos y cantidad?.
-que al hacer clic en el item, se cargue a un "carrito". para cantidad hacer un select?
(o sea, se sume el producto y el importe del mismo)
- select para compra en cuotas (1, 3, 6) y efectivo descuento del 20%.-- switch
- 
*/

const PRODUCTO_UNO = "fideos";
const PRODUCTO_DOS = "aceite";
const PRODUCTO_TRES = "salsa";

const PRECIO_FIDEOS = 200; 
const PRECIO_ACEITE = 300; 
const PRECIO_SALSA = 100; 

const IMG_FIDEOS = "./fideos.jpg";
const IMG_ACEITE = "./aceite.jpg";
const IMG_SALSA = "./salsa";

const EFECTIVO = 0.8;
const UNA_CUOTA = 1;
const TRES_CUOTAS = 3; 
const SEIS_CUOTAS = 6; 

let prodUno = "prod por def";
let prodDos = "prod por def";
let prodTres = "prod por def";

let cantProdUno = 0;
let cantProdDos = 0;
let cantProdTres = 0;


let precioFinal = "precio final por def"
 
let sumaCompraTotal = "numero por def"

function fideos () {
    prodUno = document.querySelector('#Fideos').value;
    cantProdUno = Number(document.querySelector('#cantidad_fideos').value);
    document.querySelector(`#ver_compra_uno`).innerHTML= `  
    <h4> Agregaste ${cantProdUno} ${prodUno} fideos </h4>            
        `;  
}
function aceite () {
    prodDos = document.querySelector('#Aceite').value;
    cantProdDos = Number(document.querySelector('#cantidad_aceite').value);
    document.querySelector(`#ver_compra_dos`).innerHTML= `  
    <h4> Agregaste ${cantProdDos} ${prodDos} aceite </h4>            
        `;  
}
function salsa () {
    prodTres = document.querySelector('#Salsa').value;
    cantProdTres = Number(document.querySelector('#cantidad_salsa').value);
    document.querySelector(`#ver_compra_tres`).innerHTML= `  
    <h4> Agregaste ${cantProdTres} ${prodTres} salsa </h4>            
        `;  
}

/* compraTotal: al hacer clic debe hacer la siguiente operación: 
multiplicar PRECIO_PROD x cantProd y sumar los 3 items.

 let sumaCompraTotal = (cantProdUno * PRECIO_FIDEOS) + (cantProdDos * PRECIO_ACEITE) + (cantProdTres * PRECIO_SALSA) ;
*/
function compraTotal() {
   
    sumaCompraTotal = (cantProdUno * PRECIO_FIDEOS) + (cantProdDos * PRECIO_ACEITE) + (cantProdTres * PRECIO_SALSA) ;
    console.log(cantProdUno,cantProdDos,cantProdTres)
    document.querySelector(`#ver_compra_final`).innerHTML = ` 
    <h4> Total $ ${sumaCompraTotal}   </h4>
    `;  
 }


function compraCuotas(id){

    switch(Number(id)){
        case EFECTIVO:
            document.querySelector('#pagoCuotas').innerHTML =`
                <h2> Su pago será de ${sumaCompraTotal * EFECTIVO } pesos en efectivo con un 20% de descuento</h2>
                
            `;
            break;
        case UNA_CUOTA:
            document.querySelector('#pagoCuotas').innerHTML =`
                <h2> Su pago será en 1 cuota de ${sumaCompraTotal} pesos</h2>
               
                
            `;
            break;
        case TRES_CUOTAS:
            document.querySelector('#pagoCuotas').innerHTML =`
                <h2> Su pago con tarjeta de 3 cuotas será de ${sumaCompraTotal / TRES_CUOTAS} pesos por mes</h2>
               
            `;
             break;
        case SEIS_CUOTAS:
            document.querySelector('#pagoCuotas').innerHTML =`
                <h2> Su pago con tarjeta de 6 cuotas será de ${sumaCompraTotal / SEIS_CUOTAS } pesos por mes</h2>                
                
            `;
             break;
        default:
            document.querySelector('#pagoCuotas').innerHTML =`
                <h2> importe no encontrado </h2>
            
            
            `;  
    }
}
   
