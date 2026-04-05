// For/While

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const frutas = ['manzana', 'banana', 'naranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`La fruta en la posición ${i} es: ${frutas[i]}`);
}

// For of
for (const fruta of frutas) {
    console.log(`La fruta es: ${fruta}`);
    if(fruta === 'banana') {
        console.log('Encontré una banana');
    }
}

const persona = {
    nombre: 'Juan',
    edad: 30
};

console.log(persona['nombre']);

// For in
for (const clave in persona) {
    console.log(`La propiedad ${clave} tiene el valor: ${persona[clave]}`);
}

// While

let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

// Do While

let numero = 0;

do {
    console.log(`Entra en: ${numero}`);
    numero++;
} while (numero < 3);

console.log(numero);