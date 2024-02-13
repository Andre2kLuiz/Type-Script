"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]);
console.log(dias);
const d = new Date();
console.log(d.getDate());
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["User"] = 10] = "User";
    tipoUsuario[tipoUsuario["Admin"] = 100] = "Admin";
    tipoUsuario[tipoUsuario["Super"] = 1000] = "Super";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.Super);
const tp = tipoUsuario.Super;
console.log(tp);
