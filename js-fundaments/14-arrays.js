// Arrays

const notas = ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5'];
const numeros = [1, 2, 3, 4, 5];
const mixtos = ['Texto', 1, true, null, undefined, { nome: 'Objeto' }, [1, 2, 3]];  

console.log(notas);
console.log(numeros);
console.log(mixtos);

// Create
// push() - lo suma al final del array
notas.push('Nota 6');
console.log(notas);

// unshift() - lo suma al inicio del array
notas.unshift('Nota 0');
console.log(notas);

// lo suma en una posición específica
// posición, si se quiere eliminar, elemento a agregar
notas.splice(2, 0, 'Nota 1.5');
console.log(notas);

// posición, 1 para eliminar, nuevo elemento
notas.splice(2, 1, 'Nota 1.4');
console.log(notas);

// Read
console.log(notas[0]); // Nota 0
console.log(notas[2]); // Nota 1.4
console.log(notas.length);

// Update
const notas2 = ['Notas 1', 'Notas 2', 'Notas 3'];
notas2[1] = 'Notas 2 actualizada';
console.log(notas2);

// Delete
const notas3 = ['Notas 1', 'Notas 2', 'Notas 3', 'Notas 4'];
console.log(notas3);

notas3.splice(1, 1); // Elimina el elemento en la posición 1
console.log(notas3);

notas3.pop(); // Elimina el último elemento
console.log(notas3);

notas3.shift(); // Elimina el primer elemento
console.log(notas3);