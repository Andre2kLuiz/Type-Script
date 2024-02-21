teste();

function teste():void {
    console.log("Teste");
}

const teste2 = (txt:string = "..."):void => {
    console.log(txt);
}

teste2("Andre Luiz")
teste2("Youtube")
teste2("Linkedin")
teste2()

const soma3 = (n1:number, n2:number):number => {
    return n1 + n2
}

console.log(soma3(50, 60));

let num:number[] = [10, 20, 30, 40, 50];

const soma4 = (n:number[]):number => {
    let s:number = 0;
    n.forEach((e) => {
        s += e;
    })

    return s;
}

console.log(soma4(num));