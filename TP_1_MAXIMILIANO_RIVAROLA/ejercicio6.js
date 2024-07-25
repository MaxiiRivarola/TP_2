// Declarar un array llamado "meses" con los nombres de los meses del año
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Solicitar al usuario que ingrese un número del 1 al 12
let numeroMes = prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes:");

// Convertir el número ingresado a un índice válido para el array meses
let indice = parseInt(numeroMes) - 1;

// Verificar si el índice es válido y mostrar el nombre del mes correspondiente
if (indice >= 0 && indice < meses.length) {
    let nombreMes = meses[indice];
    console.log(`El mes correspondiente al número ${numeroMes} es ${nombreMes}.`);
} else {
    console.log("El número ingresado no es válido. Por favor, ingresa un número del 1 al 12.");
}
