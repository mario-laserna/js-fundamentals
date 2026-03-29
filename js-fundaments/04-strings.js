// Strings

const nombre = 'Javascript';
const version = "ES6";
console.log(nombre, version); // Javascript ES6

// Concatenación de strings
const mensaje = 'Bienvenido a ' + nombre + ' ' + version;
console.log(mensaje); // Bienvenido a Javascript ES6

// Template literals (plantillas literales)
const mensajeTemplate = `Bienvenido a ${nombre}, en su version ${version}`;
console.log(mensajeTemplate); // Bienvenido a Javascript ES6 

// Expresiones dentro de template literals
const precio = 5;
const cantidad = 10;
const total = `El precio total es: ${precio * cantidad}`;
console.log(total); // El precio total es: 50

// Multiples líneas con template literals
const multilinea = `
Esta es una línea
y esta es otra línea
y esta es una tercera línea.

# Mi nota
- Nota 1: 8
- Nota 2: 9
`;
console.log(multilinea);