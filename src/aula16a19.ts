class Computador{
    private nome:string;
    private ram:number;
    private cpu:number;
    private ligado:boolean;

    constructor(nome:string, ram:number, cpu:number, ligado:boolean){
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado = ligado
    }

    getNome():string{
        return this.nome;
    }

    setNome(nome:string):void{
        this.nome = nome;
    }

    info():void{
        console.log(`Nome: ${this.nome} \nRan: ${this.ram} \nCpu: ${this.cpu} \nLigado: ${this.ligado?"sim":"não"} \n---------------------`)
    }

    ligar():void {
        this.ligado = true
    }

    desligado():void {
        this.ligado = false
    }

    upgradeRan(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000){
            this.ram = this.ram += qtde
        }else{
            console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitida`)
        }
        
    }
}

//instaciar
const comp1 = new Computador("Computador1", 8, 2.4, true);
const comp2 = new Computador("Computador2", 4, 2.4, true);
const comp3 = new Computador("Computador3", 32, 5.4, false);

comp1.desligado()
comp2.desligado()
comp3.ligar()

comp2.setNome("Veloz")

comp1.upgradeRan(12)

console.log(comp1.info())
console.log(comp2.info())
console.log(comp3.info())