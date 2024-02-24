//Public: Acessado de qualquer lugar
//Private: Acessado somente na sua própria classe
//Protected: Acessado domente na sua própria classe e nas classes filho

abstract class Conta {
    private readonly numero:number
    protected titular:string
    private saldoConta:number

    constructor(titular:string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }
    
    gerarNumeroConta():number {
        return Math.floor(Math.random() * 100000) + 1
    }

    protected info():void{
        console.log(`Titular:${this.titular} \nNumero:${this.getNumero()}`)
    }

    protected get saldo():number{
        return this.saldoConta
    }

    protected set saldo(saldoConta:number){
        this.saldoConta = saldoConta
    }

    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor invalido")
            return
        }
        this.saldoConta += valor
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor invalido")
            return
        }
        if(valor < this.saldoConta){
            this.saldoConta-=valor
        }else{
            console.log(`Saldo insuficiente!!!`)
        }
    }

    getNumero():number{
        return this.numero
    }
}

class PessoaFisica extends Conta {
    cpf:number

    constructor(cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF Criada ${this.getNumero()}`)
         
    }
    info(){
        super.info()
        console.log(`Cpf: ${this.cpf}`)
    }

    public deposito(valor:number){
        if(valor >= 3000){
            console.log("Valor muito alto para este tipo de conta")
        }else{
            super.deposito(valor)
        }
    }

    public saque(valor:number){
        if(valor > 1000 || valor <= 0){
            console.log("Valor incorreto impossivel sacar")
        }else{
            super.saque(valor)
        }
    }

    public saldoEmConta():number{
        return this.saldo
    }
}

class PessoaJuridica extends Conta {
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ Criada ${this.getNumero()}`)
    }
    info(){
        super.info()
        console.log(`Cnpj: ${this.cnpj}`)
    }

    public deposito(valor:number){
        if(valor >= 10000){
            console.log("Valor muito alto para este tipo de conta")
        }else{
            super.deposito(valor)
        }
    }

    public saque(valor:number){
        if(valor > 10000 || valor <= 0){
            console.log("Valor incorreto impossivel sacar")
        }else{
            super.saque(valor)
        }
    }

    public saldoEmConta():number{
        return this.saldo
    }
}

const conta1 = new PessoaFisica(123456789, "Andre")
const conta2 = new PessoaJuridica(987654321, "Luiz")

conta1.deposito(1500)
console.log(conta1.saldoEmConta())

conta2.deposito(8000)
console.log(conta2.saldoEmConta())

conta1.saque(1000)
console.log(conta1.saldoEmConta())

conta2.saque(7000)
console.log(conta2.saldoEmConta())

conta1.info()
conta2.info()