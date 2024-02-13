// null - undefined - unknown

let vnome:string|null; // null - tippo nulo
vnome = null;
console.log(vnome);

let vnome2:any; // undefined - indefinido
console.log(vnome2);

let vnome3:unknown = vnome; // unknown só pode ser atribuido em tipos unknown ou any pois ele é desconhecido
let cnum:any = vnome3;
console.log(cnum);