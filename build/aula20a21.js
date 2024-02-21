"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class PessoaFisica extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new PessoaFisica(123456789, "Andre");
const conta2 = new PessoaJuridica(987654321, "Luiz");
console.log(conta1);
console.log(conta2);
