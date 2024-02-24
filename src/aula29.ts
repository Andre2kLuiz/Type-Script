//GENERICS

function f_teste<t, u>(v:t, r:u):t{
    return v
}

console.log(f_teste<number, string>(10, "10"))
console.log(f_teste<string, number>("10", 10))
console.log(f_teste<boolean, boolean>(true, false))

class C_teste<T>{
    public valor:T

    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<string>("nome")
const ct2 = new C_teste<number>(10)

console.log(ct1.valor)
console.log(ct2.valor)