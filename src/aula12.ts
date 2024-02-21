function teste (user:string, password:string):void {
    console.log(`User: ${user}`);
    console.log(`Senha: ${password}`);
}

teste('Andre Luiz', '123');

function soma2 (n1:number, n2:number):number {
    let ret = n1 + n2
    return ret
}

const res:number = soma2(10, 25)
const s_res:string = soma2(33, 22).toString();

console.log(res);
console.log(s_res);