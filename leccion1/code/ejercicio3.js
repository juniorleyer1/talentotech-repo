// ejercicio 3
console.log('EJERCICIO 3:');
let esMayorDeEdad = true;
let tieneLicencia = false;

// uso de los comparadores.
console.log('Operador logico[&&]', esMayorDeEdad && tieneLicencia);
console.log('Operador logico[||]', esMayorDeEdad || tieneLicencia);

// mensaje de bienvenida.
let puedeConducir = esMayorDeEdad && tieneLicencia;
let nombre1 = 'Angel';
let mensajeBienvenida1 = ',¡Bienvenido/a! Nos alegra que estés aquí.';
let mensajeBienvenida2 = `Hola! ${nombre1},  puedes conducir: `;
console.log(nombre + mensajeBienvenida1, puedeConducir);
console.log(mensajeBienvenida2, puedeConducir);