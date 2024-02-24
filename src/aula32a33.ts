
namespace Veiculos{
    enum Cores {"Preto","branco","Amarelo","Prata","Azul"}
    export abstract class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor:String
        constructor(nome:string,motor:Motores.Motor, cor:Cores){
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }
        public ligar(){
            this.motor.liga = true
        }
        public desLigar(){
            this.motor.liga = false
        }
        get minhaCor(){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return (this.motor.liga?"sim":"não")
        }
        get minhaPotencia(){
            return this.motor.pot
        }
    }

    export class CarroEsportivo extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(6,30,new Motores.Turbo(100)), cor)
        }
    }
    export class CarroPopular extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(3,20), cor)
        }
    }
}

namespace Motores{
    export class Turbo{
        private pot:number
        constructor(pot:number){
            this.pot = pot
        }
        get potencia(){
            return this.pot
        }
    }

    export class Motor{
        private ligado:boolean
        private cilindros:number
        private potencia:number
        
        constructor(potencia:number, cilindros:number, turbo?:Turbo){
            this.potencia = potencia + (turbo?turbo.potencia:0)
            this.cilindros = cilindros
            this.ligado = false           
        }

        set liga(ligado:boolean){
            this.ligado = ligado
        }
        get liga(){
            return this.ligado
        }
        get pot(){
            return this.potencia
        }
        get N_cilindros(){
            return this.cilindros
        }
       
    }
}

const carro1 = new Veiculos.CarroEsportivo("Ferrari", 3)
const carro2 = new Veiculos.CarroEsportivo("Celta", 4)

carro1.ligar()

console.log(`Nome: ${carro1.meuNome}`)
console.log(`Cor: ${carro1.minhaCor}`)
console.log(`Potencia: ${carro1.minhaPotencia}`)
console.log(`Ligado: ${carro1.estouLigado}`)

console.log(`_________________________________`)

console.log(`Nome: ${carro2.meuNome}`)
console.log(`Cor: ${carro2.minhaCor}`)
console.log(`Potencia: ${carro2.minhaPotencia}`)
console.log(`Ligado: ${carro2.estouLigado}`)






