// Coerción implícita

// Coerción es cuando los tipos de datos se convierten de forma
// automática
console.log('5' + 3); // concatena
console.log('5' - 3); // si hace la operación matemática
console.log(true + 1); // suma y obtiene un 2


// Conversión explícita
const str = '42';
const num = Number(str);
console.log(typeof num, num);

const int = parseInt(str, 10);
console.log(typeof int, int);

const float = parseFloat('3.1415')
console.log(typeof float, float);

const texto = String(123)
console.log(typeof texto, texto);

const bool = Boolean(1);
console.log(typeof bool, bool);