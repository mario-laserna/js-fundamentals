// SISTEMA DE NOTAS MARKDOWN

function generateId() {
    const timestamp = Date.now();
    return timestamp;
}

//-------------------------------------
// FUNCIONES CRUD DE NOTAS
//-------------------------------------

function createNote(content, title){
    const trimmedContent = content.trim();
    if (trimmedContent === '') {
        return 'Error: El contenido no puede estar vacío.';
    }

    const noteId = generateId();
    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin título';
    const noteExceprt = content.length > 100 ? content.substring(0, 100) + '...' : content;

    const noteInfo = `
        ID: ${noteId} | Título: ${noteTitle} | Contenido: ${content} } 
        | Excerpt: ${noteExceprt} | Creado: ${currentTime} | Actualizado: ${currentTime}
    `;

    return noteInfo;
}

function updateNote(noteId, newContent){
    if (noteId === undefined || noteId === null || noteId === '') {
        return 'Error: ID inválido.';
    }
    
    const trimmedContent = newContent.trim();
    if (trimmedContent === '') {
        return 'Error: El contenido no puede estar vacío.';
    }

    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin título';
    const noteExceprt = newContent.length > 100 ? newContent.substring(0, 100) + '...' : newContent;

    const updateNoteInfo = `
        ID: ${noteId} | Título: ${noteTitle} | Contenido: ${newContent} } 
        | Excerpt: ${noteExceprt} | Creado: ${currentTime} | Actualizado: ${currentTime}
    `;

    return updateNoteInfo;
}

function deleteNote(noteId){
    if (noteId === undefined || noteId === null || noteId === '') {
        return 'Error: ID inválido.';
    }

    return `Nota con ID: ${noteId}, fue eliminada.`;
}

function listNotes(){
    return 'Listando todas las notas disponibles';
}

// Pruebas de las funciones CRUD

// Ejemplo 1: crear una nota
console.log('=== CREAR NOTA ===');
const nota1 = createNote('# Mi primera nota\nEste es el contenido de mi primera nota en Markdown');
console.log(nota1);

// Ejemplo 2: crear una nota con titulo personalizado
console.log('=== CREAR NOTA CON TÍTULO ===');
const nota2 = createNote('Contenido de la segunda nota', 'Nota importante');
console.log(nota2);

// Ejemplo 3: intentar crear una nota con contenido vacío
console.log('=== CREAR NOTA CON CONTENIDO VACÍO ===');
const nota3 = createNote('   ');
console.log(nota3);