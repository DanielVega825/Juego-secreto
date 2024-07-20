//Con el metodo "document.querySelector()", donde traigo un elemento de una etiqueta. 

let listaNumerosSorteados = [];
let numeroSercreto = 0;
let intentos = 0;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //buena practica aunque no retorne ningun valor
}

function clearInput(elemento) {
    document.getElementById(elemento).value = '';
    //document.querySelector('#'elemento).value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSercreto = generarNumeroSecreto();
    intentos = 1;
}


function verificarIntento() {
    //let numeroUsuario = document.querySelector('input'); En vez de buscar un input, de los cuales pueden haber varios, 
    //                                                          se utiliza la siguiente funcion
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`pp ${numeroSercreto}`);
    if(numeroUsuario === numeroSercreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');  
    } else {
        if (numeroUsuario > numeroSercreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
    }

    clearInput('valorUsuario');
    
    return;
}


condicionesIniciales();


