// Operadores de comparacion con JS: igualdad y desigualdad

// Igualdad debil (==)
// hace conversión de tipos
console.log(5 == '5'); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true

// Desigualdad debil (!=)
console.log(5 != '5'); // false

// Igualdad estricta
// compara valor y tipo de dato
console.log(5 === '5'); // false
console.log(5 === 5); // true

// Desigualdad estricta
console.log(5 !== '5'); // true
console.log(5 !== 5); // false