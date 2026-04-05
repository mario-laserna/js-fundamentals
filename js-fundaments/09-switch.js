// SWITCH

const dia = 'sabado';

switch (dia) {
    case 'lunes':
        console.log('Hoy es lunes');
        break;
    case 'martes':
        console.log('Hoy es martes');
        break;
    case 'miercoles':
        console.log('Hoy es miercoles');
        break;
    case 'jueves':
        console.log('Hoy es jueves');
        break;
    case 'viernes':
        console.log('Hoy es viernes');
        break;
    case 'sabado':
    case 'domingo':
        console.log('Hoy es fin de semana');
        break;
    default:
        console.log('No es un dia valido');
}

const nuevoDia = 'martes';
switch (nuevoDia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('Es un dia laboral');
        break;
    default:
        console.log('Es fin de semana o no es un dia valido');
}