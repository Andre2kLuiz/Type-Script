
let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor = 10;
svalor = '20';
nvalor = 10;

nvalor = Number.parseInt(svalor);
svalor = nvalor.toString();

console.log(typeof(nvalor));
console.log(nvalor);

console.log(typeof(svalor));
console.log(svalor);

//nvalor = <number><unknown>svalor;

//nvalor = <number>uvalor;
///svalor = <string>uvalor;
//svalor+=10;

//console.log(typeof(uvalor));
//console.log(uvalor);

//console.log(typeof(nvalor));
//console.log(nvalor);

//console.log(typeof(svalor));
//console.log(svalor);