const a = "9.8";
const b = 10;

console.log(parseFloat(a) == (b)); //false

console.log((parseFloat(a)).toFixed() == (b)); // Making them equal