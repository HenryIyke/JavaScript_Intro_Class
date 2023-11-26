const a = 10;
const b = "10";
const c = "Name"

let d = (a == b); // d is true
let e = (typeof(b) == typeof(c)); // e is true
let f = !(a === b); // f is true

console.log(d,e,f);

let g = (a === b); // g is false
let h = (typeof(a) == typeof(b)); // h is false
let i = (a === c) // i is false

console.log(g,h,i);