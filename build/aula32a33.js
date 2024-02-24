"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["branco"] = 1] = "branco";
        Cores[Cores["Amarelo"] = 2] = "Amarelo";
        Cores[Cores["Prata"] = 3] = "Prata";
        Cores[Cores["Azul"] = 4] = "Azul";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desLigar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "sim" : "não");
        }
        get minhaPotencia() {
            return this.motor.pot;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 30, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 20), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.potencia : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get pot() {
            return this.potencia;
        }
        get N_cilindros() {
            return this.cilindros;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Ferrari", 3);
const carro2 = new Veiculos.CarroEsportivo("Celta", 4);
carro1.ligar();
console.log(`Nome: ${carro1.meuNome}`);
console.log(`Cor: ${carro1.minhaCor}`);
console.log(`Potencia: ${carro1.minhaPotencia}`);
console.log(`Ligado: ${carro1.estouLigado}`);
console.log(`_________________________________`);
console.log(`Nome: ${carro2.meuNome}`);
console.log(`Cor: ${carro2.minhaCor}`);
console.log(`Potencia: ${carro2.minhaPotencia}`);
console.log(`Ligado: ${carro2.estouLigado}`);
