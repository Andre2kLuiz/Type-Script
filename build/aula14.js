"use strict";
teste();
function teste() {
    console.log("Teste");
}
const teste2 = (txt = "...") => {
    console.log(txt);
};
teste2("Andre Luiz");
teste2("Youtube");
teste2("Linkedin");
teste2();
const soma3 = (n1, n2) => {
    return n1 + n2;
};
console.log(soma3(50, 60));
let num = [10, 20, 30, 40, 50];
const soma4 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
console.log(soma4(num));
