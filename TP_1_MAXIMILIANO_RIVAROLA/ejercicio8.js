// Solicitar al usuario que introduzca un texto
let texto = prompt("Introduce un texto:");

// Definir una función para verificar si un carácter es una vocal
function esVocal(caracter) {
    return "aeiouAEIOU".indexOf(caracter) !== -1;
}

// Buscar la primera vocal en el texto introducido
let posicion = -1;
for (let i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
        posicion = i + 1;
        break;
    }
}

// Mostrar el resultado
if (posicion !== -1) {
    console.log(`La primera vocal en "${texto}" es la letra Nº${posicion}.`);
} else {
    console.log("No se encontraron vocales en el texto introducido.");
}
