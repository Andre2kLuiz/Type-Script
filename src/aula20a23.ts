//Public: Acessado de qualquer lugar
//Private: Acessado somente na sua própria classe
//Protected: Acessado domente na sua própria classe e nas classes filho

class Conta {
    private numero:number
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

    public saldo():number{
        return this.saldoConta
    }

    protected deposito(valor:number){
        this.saldoConta += valor
    }

    protected saque(valor:number){
        if(valor > this.saldoConta){
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
}

const conta1 = new PessoaFisica(123456789, "Andre")
const conta2 = new PessoaJuridica(987654321, "Luiz")

conta1.deposito(1500)
console.log(conta1.saldo())

conta2.deposito(8000)
console.log(conta2.saldo())

conta1.info()
conta2.info()