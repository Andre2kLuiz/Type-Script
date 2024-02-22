"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular} \nNumero:${this.getNumero()}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor > this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Saldo insuficiente!!!`);
        }
    }
    getNumero() {
        return this.numero;
    }
}
class PessoaFisica extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada ${this.getNumero()}`);
    }
    info() {
        super.info();
        console.log(`Cpf: ${this.cpf}`);
    }
    deposito(valor) {
        if (valor >= 3000) {
            console.log("Valor muito alto para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
class PessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada ${this.getNumero()}`);
    }
    info() {
        super.info();
        console.log(`Cnpj: ${this.cnpj}`);
    }
    deposito(valor) {
        if (valor >= 10000) {
            console.log("Valor muito alto para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
const conta1 = new PessoaFisica(123456789, "Andre");
const conta2 = new PessoaJuridica(987654321, "Luiz");
conta1.deposito(1500);
console.log(conta1.saldo());
conta2.deposito(8000);
console.log(conta2.saldo());
conta1.info();
conta2.info();
