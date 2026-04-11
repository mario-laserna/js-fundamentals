// Scope

const global = 'Soy Global';

function ejemplo() {
    const funcion = 'Soy de función';
    
    if(true) {
        const bloque = 'Soy de bloque';
        console.log(`Funcion: ${funcion}`);  // Accede a la variable de función
        console.log(`Bloque: ${bloque}`);  // Accede a la variable de bloque
        console.log(`Global: ${global}`);  // Accede a la variable global
    }

    console.log(`Funcion: ${funcion}`);  // Accede a la variable de función
    //console.log(`Bloque: ${bloque}`);  // Accede a la variable de bloque
    console.log(`Global: ${global}`);  // Accede a la variable global
}


ejemplo(); // Llama a la función para ver su alcance
//console.log(`Funcion: ${funcion}`);  // Accede a la variable de función
//console.log(`Bloque: ${bloque}`);  // Accede a la variable de bloque
console.log(`Global: ${global}`);  // Accede a la variable global