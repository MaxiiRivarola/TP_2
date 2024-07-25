// Se declaran las variables dato y resultado
let dato, resultado;

// Se solicita al usuario que introduzca su nombre mediante un cuadro de diálogo de ventana emergente, el valor predeterminado es "..."
let val1 = window.prompt("Introduce tu nombre", "...");

// Se solicita al usuario que introduzca su apellido mediante un cuadro de diálogo de ventana emergente, el valor predeterminado es "..."
let val2 = window.prompt("Introduce tu apellido", "...");

// Se concatena el nombre y el apellido introducidos por el usuario y se asigna el resultado a la variable resultado
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;

// Se escribe el resultado en el documento HTML
document.write(resultado);
