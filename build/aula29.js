"use strict";
function f_teste(v, r) {
    return v;
}
console.log(f_teste(10, "10"));
console.log(f_teste("10", 10));
console.log(f_teste(true, false));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste("nome");
const ct2 = new C_teste(10);
console.log(ct1.valor);
console.log(ct2.valor);
