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
}
const comp1 = new Computador("Computador1", 8, 2.4, true);
const comp2 = new Computador("Computador2", 4, 2.4, true);
const comp3 = new Computador("Computador3", 32, 5.4, false);
console.log(`Nome: ${comp1.nome} \nRan: ${comp1.ram} \nCpu: ${comp1.cpu} \nLigado: ${comp1.ligado}`);
console.log(comp2);
console.log(comp3);
