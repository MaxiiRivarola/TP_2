//Defino clase de vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Defino la clase hija Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}

// Crear instancias de ambas clases y mostrar la información en la consola del navegador
const vehiculoGenerico = new Vehiculo("Fiat", "Palio", 2002);
const automovilEjemplo = new Automovil("Renaul", "Logan", 2009, "Azul", 350000);

console.log("Información del vehículo:");
console.log(vehiculoGenerico.obtenerInformacion());

console.log("\nInformación del automóvil de ejemplo:");
console.log(automovilEjemplo.obtenerInformacion());
