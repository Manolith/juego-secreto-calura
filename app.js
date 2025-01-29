let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function intentoDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);*/
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos==1) ? "intento" : "intentos"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor")

        }else{
        asignarTextoElemento("p","El número secreto es mayor")

        }
    intentos++
    limpiarCaja();
    }
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento("p","Ya están todos los números posibles")
    }else{
        //Saber si el numero esta en la lista
        if(listaNumeros.includes(numeroGenerado)){
        //includes recorre toda la lista
        return numeroGenerado();
        }else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
        }
    }

}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p","Ingrese un número entre 1 y numeroMaximo");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalos de numeros
    //Generar un nuevo numero secreto
    //reiniciar intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();