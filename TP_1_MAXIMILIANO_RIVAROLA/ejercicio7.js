var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar el elemento de texto con más letras
let elementoMayor = "";
let longitudMayor = 0;
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string") {
        if (valores[i].length > longitudMayor) {
            elementoMayor = valores[i];
            longitudMayor = valores[i].length;
        }
    }
}
console.log(`El elemento de texto con más letras es "${elementoMayor}" con ${longitudMayor} letras.`);

// 2. Imprimir los elementos de texto ordenados de menor a mayor cantidad de letras
let elementosTexto = valores.filter(elemento => typeof elemento === "string");
elementosTexto.sort((a, b) => a.length - b.length);
console.log("Elementos de texto ordenados de menor a mayor cantidad de letras:");
console.log(elementosTexto);

// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas realizadas con los dos elementos numéricos
let numeros = valores.filter(elemento => typeof elemento === "number");
if (numeros.length >= 2) {
    let suma = numeros[0] + numeros[1];
    let resta = numeros[0] - numeros[1];
    let multiplicacion = numeros[0] * numeros[1];
    let division = numeros[0] / numeros[1];

    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`Multiplicación: ${multiplicacion}`);
    console.log(`División: ${division}`);
} else {
    console.log("No hay suficientes elementos numéricos para realizar las operaciones.");
}
