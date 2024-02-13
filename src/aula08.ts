// objetos

let dados_a = {
    nome:"Andre",
    idade:25,
    status:"A",
    ola:() => {console.log("hello Word!")},
    info:(p:string) => {console.log(p)}
}

console.log(typeof(dados_a));
console.log(dados_a.nome);

dados_a.ola();
dados_a.info(dados_a.nome);