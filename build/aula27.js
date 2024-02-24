"use strict";
let curso1;
let curso2;
curso1 = {
    titulo: "Type-Script",
    des: "Curso de type-script",
    aula: 100,
    maxAlunos: 50,
};
curso2 = {
    titulo: "java-Script",
    des: "Curso de java-script",
    aula: 200,
};
console.log(JSON.stringify(curso1));
console.log(JSON.stringify(curso2));
