// Métodos de orden superior

// Un método de orden superior es una función que recibe otra función como argumento o devuelve una función como resultado.

// Map() -> devuelve un nuevo array con los resultados de aplicar una función a cada elemento del array original

const notas = [
    { id: 1, title: 'Mi primera nota', content: 'Contenido de la nota 1' },
    { id: 2, title: 'Mi segunda nota', content: 'Contenido de la nota 2' },
    { id: 3, title: 'Mi tercera nota', content: 'Contenido de la nota 3' }
];

const titulos = notas.map((nota) => nota.title);
console.log(titulos);

const notaConFecha = notas.map((nota) => ({
    ...nota,
    createdAt: Date.now()
}));
console.log(notaConFecha);

// Filter() -> devuelve un nuevo array con los elementos que cumplen una condición

const notas2 = [
    { id: 1, title: 'Nota 1 updated', content: 'Contenido nota 1', isFavorite: true },
    { id: 2, title: 'Nota 2', content: 'Contenido nota 2', isFavorite: false },
    { id: 3, title: 'Nota 3 update', content: 'Contenido nota 3', isFavorite: true }
];

const notasFavoritas = notas2.filter((nota) => !nota.isFavorite);
console.log(notasFavoritas);

const titulo = notas2
    .filter((n) => n.title.toLocaleLowerCase().includes('update'));
console.log(titulo);

// Find() -> devuelve el primer elemento que cumple una condición

const notas3 = [
    { id: 1, title: 'Nota 1 updated', content: 'Contenido nota 1', isFavorite: true },
    { id: 2, title: 'Nota 2', content: 'Contenido nota 2', isFavorite: false },
    { id: 3, title: 'Nota 3 update', content: 'Contenido nota 3', isFavorite: true }
];

const nota = notas3.find((n) => n.id === 2);
console.log(nota);

// Reduce() -> devuelve un único valor a partir de un array, aplicando una función a cada elemento del array

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);

// primero filtra, despues hace un reduce para contar
const favoritas = notas3.filter((n) => n.isFavorite);
const contador = favoritas.reduce((acumulador) => acumulador + 1, 0);
console.log(contador);

// filtra y aplica reduce al mismo tiempo.
const notasIsFavoritas = 
    notas3
        .filter((n) => n.isFavorite)
        .reduce((acumulador, n) => acumulador + 1, 0);
console.log(notasIsFavoritas);