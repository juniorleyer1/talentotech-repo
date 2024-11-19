
let numeros = [1,2,3,4,5,6,7,8,9];

numeros.push(11);       // agrega valor al final
numeros.unshift(0);     // agrega valor al inicio
numeros.pop();          // elimina el ultimo elemento
numeros.shift();        // elimina el primer elemento
numeros.splice(4,1);    // elimina el elemento dependiendo al indice(4) y la cantidad (1)
numeros.length();

console.log(numeros);
let vectorElementHtml = document.getElementById("vector");
vectorElementHtml.textContent = numeros;


function sumarElementos(){
    suma = 0;
    for(let i=0;i<numeros.length;i++){
        suma += numeros[i];
    }
    return suma;
}

function calcularPromedio(){
    let suma = sumarElementos();
    let promedio = suma / numeros.length;
    return promedio;
}

function imprimir(operacion, resultado){
    let resultadoElementHtml = document.getElementById("resultado");
    resultadoElementHtml.textContent = operacion + ":" + resultado;
}