class Conta {
    numero:number
    titular:string

    constructor(titular:string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }

    gerarNumeroConta():number {

        return Math.floor(Math.random() * 100000) + 1
    }
}

class PessoaFisica extends Conta {
    cpf:number

    constructor(cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
    }
}

class PessoaJuridica extends Conta {
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj

    }
}

const conta1 = new PessoaFisica(123456789, "Andre")
const conta2 = new PessoaJuridica(987654321, "Luiz")

console.log(conta1)
console.log(conta2)