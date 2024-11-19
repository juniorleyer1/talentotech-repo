// Ejercicio 4
let nombreUsuario = prompt('¿Cuál es tu nombre?');
let edadUsuario = parseInt(prompt('¿Cuál es tu edad?'));
let esEstudiante = prompt('¿Eres estudiante? (sí/no)').toLowerCase() === 'si';
let mensaje = `Hola, ${nombreUsuario}.`;
mensaje += ` Tienes ${edadUsuario} años.`;

if (edadUsuario >= 18) {
  mensaje += ' Eres mayor de edad.';
} else {
  mensaje += ' Eres menor de edad.';
}
if (esEstudiante) {
  mensaje += ' Tienes derecho a un descuento por ser estudiante.';
}
console.log(mensaje);
