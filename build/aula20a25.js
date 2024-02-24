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
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor invalido");
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor invalido");
            return;
        }
        if (valor < this.saldoConta) {
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
    saque(valor) {
        if (valor > 1000 || valor <= 0) {
            console.log("Valor incorreto impossivel sacar");
        }
        else {
            super.saque(valor);
        }
    }
    saldoEmConta() {
        return this.saldo;
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
    saque(valor) {
        if (valor > 10000 || valor <= 0) {
            console.log("Valor incorreto impossivel sacar");
        }
        else {
            super.saque(valor);
        }
    }
    saldoEmConta() {
        return this.saldo;
    }
}
const conta1 = new PessoaFisica(123456789, "Andre");
const conta2 = new PessoaJuridica(987654321, "Luiz");
conta1.deposito(1500);
console.log(conta1.saldoEmConta());
conta2.deposito(8000);
console.log(conta2.saldoEmConta());
conta1.saque(1000);
console.log(conta1.saldoEmConta());
conta2.saque(7000);
console.log(conta2.saldoEmConta());
conta1.info();
conta2.info();
