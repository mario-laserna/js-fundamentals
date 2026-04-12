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


// Destructuración de objetos

const nota2 = {
    id: 1,
    title: 'Mi primera nota', 
    content: 'Contenido de la nota',
    createdAt: new Date()
}

const id = nota2.id;
const title = nota2.title;
console.log(id, title);

const { title: notaTitle, content: notaContent } = nota2;

console.log(notaTitle);
console.log(notaContent);

// Spread operator

const nota3 = {
    id: 2,
    title: 'Mi primera nota', 
    content: 'Contenido de la nota',
    createdAt: new Date()
}

// por cada clave valor los asigna a un nuevo objeto
const copia = { ...nota3 };
console.log(copia);

nota3.title = 'Mi segunda nota';
console.log(nota3);
console.log(copia); // no se modifica el titulo de la copia, es un nuevo objeto

const copiaNota3 = nota3; // asigna la referencia del objeto, no crea una copia
nota3.title = 'Mi tercera nota';
console.log(copiaNota3); // se modifica el titulo de la copia, porque copiaNota3 y nota3 apuntan al mismo objeto en memoria 

const data = {
    isAdmin: true
}

// construcción de nuevo objeto a partir de otro, con campos adicionales o modificados
const notaActulizada = {
    ...nota3,
    ...data,
    edad: 18
}

console.log(notaActulizada);

// Object.keys() -> devuelve un array con las claves del objeto
console.log(Object.keys(nota3));

// Object.values() -> devuelve un array con los valores del objeto
console.log(Object.values(nota3));

// Object.entries() -> devuelve un array de arrays, donde cada subarray contiene una clave y su valor correspondiente
console.log(Object.entries(nota3));