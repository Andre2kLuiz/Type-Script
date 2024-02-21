"use strict";
function teste(user, password) {
    console.log(`User: ${user}`);
    console.log(`Senha: ${password}`);
}
teste('Andre Luiz', '123');
function soma2(n1, n2) {
    let ret = n1 + n2;
    return ret;
}
const res = soma2(10, 25);
const s_res = soma2(33, 22).toString();
console.log(res);
console.log(s_res);
