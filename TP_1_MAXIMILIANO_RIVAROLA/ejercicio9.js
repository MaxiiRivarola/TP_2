let i = 0;
let notas = []; 
let suma = 0;

while (i < 5) {
    let nota = parseInt(prompt("Ingrese la nota N°" + (i + 1)));
    if (nota >= 0 && nota < 11) {
        notas[i] = nota;
        suma += notas[i];
        i++;
    } else {
        alert("Nota inválida, por favor ingrese otro valor.");
    }
}

document.write("La suma de las notas es: ",  suma + "<br>");

let promedio = suma / notas.length;

document.write("El promedio de las notas es: " + promedio);

if (promedio <= 5) {
    document.write(" - Reprobado");
} else if (promedio > 5 && promedio <= 8) {
    document.write(" - Aprobado");
} else {
    document.write(" - Sobresaliente");
}
