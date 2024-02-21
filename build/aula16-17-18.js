"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log(`Nome: ${this.nome} \nRan: ${this.ram} \nCpu: ${this.cpu} \nLigado: ${this.ligado ? "sim" : "não"} \n---------------------`);
    }
    ligar() {
        this.ligado = true;
    }
    desligado() {
        this.ligado = false;
    }
}
const comp1 = new Computador("Computador1", 8, 2.4, true);
const comp2 = new Computador("Computador2", 4, 2.4, true);
const comp3 = new Computador("Computador3", 32, 5.4, false);
comp1.desligado();
comp2.desligado();
comp3.ligar();
console.log(comp1.info());
console.log(comp2.info());
console.log(comp3.info());
