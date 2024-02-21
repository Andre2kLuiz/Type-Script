function soma(n1:number, n2:number):number {
    return n1 + n2;
}

console.log(soma(5, 5));

function novoUser(user:string, pass:string, nome?:string):void {

    let dados = [user, pass, nome]
    console.log(dados);
    
}

novoUser("Galgamet", "12345")

