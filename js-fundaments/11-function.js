// Funciones

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const mensaje = saludar("Mario"); // "Hola, Mario"
const mensaje2 = saludar("Luisa"); // "Hola, Luisa"

console.log(mensaje, mensaje2);


// Parámetros / Argumentos

function crearUsuario(nombre, edad) {
    return {
        nombre,
        edad
    };
}

const usuario1 = crearUsuario("Ana", 25);

console.log(usuario1);

// Arrow Functions

const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12
console.log(multiplicar(7, 2)); // 14


const crearNota = (contenido, titulo = 'Sin título') => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    };
};

const nota1 = crearNota("Esta es una nota importante", "Nota 1");
const nota2 = crearNota("Esta es otra nota sin título");

console.log(nota1);
console.log(nota2);