// Objects

const nota = {
    id: 1,
    title: 'Mi primera nota', 
    content: 'Contenido de la nota',
    createdAt: new Date()
}

console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo]);

// acceso a campos que pueden no existir
console.log(nota.author?.name); // undefined