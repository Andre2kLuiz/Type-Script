"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = "Computador1";
comp2.nome = "Computador2";
comp3.nome = "Computador3";
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
