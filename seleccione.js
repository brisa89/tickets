
const valorTicket=200;


let descuentoEstudiante= 0.80;
let descuentoTrainee= 0.50;
let descuentoJunior= 0.15;

const cantidad= document.getElementById ('cantidad');
const categoria= document.getElementById ('categoriaSeleccionar');
const botonCalcular= document.getElementById ('calcular');
const botonBorrar= document.getElementById ('reset');
const precioFinal= document.getElementById ('precio');

function totalPagar(){
    let totalPrecio =(cantidad.value)*valorTicket;

    if(categoria.value == 1){
        totalPrecio= totalPrecio - (totalPrecio * descuentoEstudiante);
    }
    if(categoria.value == 2){
        totalPrecio= totalPrecio - (totalPrecio * descuentoTrainee);
    }
    if(categoria.value == 3){
        totalPrecio= totalPrecio - (totalPrecio * descuentoJunior);
    }
    else{
        totalPrecio = totalPrecio;
    }

    precioFinal.innerHTML= `Total a Pagar: ${totalPrecio}`;
}


botonCalcular.addEventListener('click', totalPagar);

botonBorrar.addEventListener('click', ()=>{
precioFinal.innerHTML= `Total a pagar : `} );

var nombre= document.getElementById('nombre');
var apellido= document.getElementById('apellido');
var error= document.getElementById('error');

function enviarFormulario(){
    var mensajesError= [];
    if(nombre.value=== null || nombre.value === ''){
    mensajesError.push('Ingresa un nombre valido');}

    if(apellido.value=== null || apellido.value === ''){
        mensajesError.push('Ingresa un apellido valido');}
    
    error.innerHTML= mensajesError.join (', ');

    return false;
}

