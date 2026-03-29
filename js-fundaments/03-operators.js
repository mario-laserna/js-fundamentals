// Operadores aritméticos

const suma = 5 + 8;
console.log('Suma:', suma); // 13

const resta = 10 - 4;
console.log('Resta:', resta); // 6

const multiplicacion = 7 * 3;
console.log('Multiplicación:', multiplicacion); // 21

const division = 20 / 5;
console.log('División:', division); // 4

const modulo = 10 % 3;
console.log('Módulo:', modulo); // 1

const potencia = 2 ** 3;
console.log('Potencia:', potencia); // 8

// Operadores de asignación

let x = 10;
x += 5; // Equivalente a x = x + 5
console.log('x después de +=:', x); // 15

x -= 3; // Equivalente a x = x - 3
console.log('x después de -=:', x); // 12

x *= 2; // Equivalente a x = x * 2
console.log('x después de *=:', x); // 24

x /= 4; // Equivalente a x = x / 4
console.log('x después de /=:', x); // 6

x %= 4; // Equivalente a x = x % 4
console.log('x después de %=:', x); // 2


// Operadores de incremento y decremento

let y = 5;
y++; // Incremento (equivalente a y = y + 1)
console.log('y después de incremento:', y); // 6

y--; // Decremento (equivalente a y = y - 1)
console.log('y después de decremento:', y); // 5   


// Infinity
console.log('División por cero:', 10 / 0); // Infinity
console.log('División por cero:', -10 / 0); // -Infinity

// NaN (Not a Number)
console.log('Operación no válida:', 'a' * 2); // NaN
console.log('Operación no válida:', 0 / 0); // NaN