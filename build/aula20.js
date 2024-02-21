"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class PessoaFisica extends Conta {
    cpf;
    constructor(cpf, numero, titular) {
        super(numero, titular);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, numero, titular) {
        super(numero, titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new PessoaFisica(8888, 123456789, "Andre");
const conta2 = new PessoaJuridica(9999, 987654321, "Luiz");
console.log(conta1);
console.log(conta2);
