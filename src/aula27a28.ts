

interface curso{
    titulo:string;
    des:string;
    iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
    aulas:number
    maxAlunos:number
}

interface cursoArtes extends curso{
    aulas:number
    maxAlunos:number
}

let curso1:cursoProg
let curso2:cursoArtes

curso1 = {titulo:"type-script", des:"Curso de TS", aulas:150, maxAlunos:50}

curso2 = {titulo:"artes", des:"Curso de artes", aulas:140, maxAlunos:60}

console.log(curso1)
console.log(curso2)



