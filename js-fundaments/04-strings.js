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


// Métodos principales de los strings

// Longitud del string
const texto = 'Hola Mundo';
console.log('Longitud:', texto.length); // 10

// Slice (extraer parte del string)
const texto1 = 'JavaScript es Genial';
console.log('Slice:', texto1.slice(0, 10)); // JavaScript
console.log('Slice:', texto1.slice(11)); // es Genial
console.log('Slice:', texto1.slice(-6)); // Genial

// Substring (inicio, fin)
// Similar a slice pero no acepta índices negativos
const texto2 = 'Hola Mundo';
console.log('Substring:', texto2.substring(0, 4)); // Hola
console.log('Substring:', texto2.substring(5)); // Mundo

// Split (dividir el string en un array)
const texto3 = 'Manzana, Banana, Naranja';
const frutas = texto3.split(', ');
console.log('Split:', frutas); // ['Manzana', 'Banana', 'Naranja']

// trim(), trimStart(), trimEnd() (eliminar espacios en blanco)
const texto4 = '   Hola Mundo   ';
console.log('Trim:|' + texto4.trim() + '|'); // 'Hola Mundo'
console.log('Trim Start:|' + texto4.trimStart() + '|'); // 'Hola Mundo   '
console.log('Trim End:|' + texto4.trimEnd() + '|'); // '   Hola Mundo'

// toUpperCase() y toLowerCase() (mayúsculas y minúsculas)
const texto5 = 'JavaScript';
console.log('Mayúsculas:', texto5.toUpperCase()); // JAVASCRIPT
console.log('Minúsculas:', texto5.toLowerCase()); // javascript

// includes() (verificar si un string contiene otro string)
const texto6 = 'Hola Mundo';
console.log('Incluye "Mundo":', texto6.includes('Mundo')); // true
console.log('Incluye "mundo":', texto6.includes('mundo')); // false (case-sensitive)

// startsWith() y endsWith() (verificar si un string comienza o termina con otro string)
const archivo = 'documento.md';
console.log('Es un archivo Markdown:', archivo.endsWith('.md')); // true
console.log('Es un archivo Markdown:', archivo.endsWith('to.md')); // true
console.log('Comienza con "doc":', archivo.startsWith('doc')); // true

// replace() y replaceAll() (reemplazar parte del string)
const texto7 = 'El gato es un animal doméstico. El gato es muy popular.';
console.log('Original:', texto7);
const nuevoTexto = texto7.replace('gato', 'perro');
console.log('Replace:', nuevoTexto); // El perro es un animal doméstico. El gato es muy popular.
const nuevoTexto2 = texto7.replaceAll('gato', 'perro');
console.log('Replace All:', nuevoTexto2); // El perro es un animal doméstico. El perro es muy popular.