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