// Closure

function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            saldo += cantidad;
            return `Depositado: $${cantidad}. Saldo actual: $${saldo}`;
        },
        retirar(cantidad) {
            if (cantidad > saldo) {
                return "Fondos insuficientes";
            }
            saldo -= cantidad;
            return `Retirado $${cantidad}. Saldo actual: $${saldo}`;
        },
        consultarSaldo() {
            return `Saldo $${saldo}.`;
        }
    }
}

let cuenta = crearCuentaBancaria(1000);
console.log(cuenta.consultarSaldo()); // Saldo $1000.
console.log(cuenta.depositar(500)); // Depositado: $500. Saldo actual: $1500
console.log(cuenta.retirar(200)); // Retirado $200. Saldo actual: $1300
console.log(cuenta.retirar(2000)); // Fondos insuficientes

const cuenta2 = crearCuentaBancaria(500);
console.log(cuenta2.consultarSaldo());