let a = 4 > 3 && 10 < 12 //  true
let b = 4 > 3 && 10 > 12 // false
let c = 4 > 3 || 10 < 12 // true
let d = 4 > 3 || 10 > 12 // true
let e = !(4 > 3) // false
let f = !(4 < 3) // true
let g = !(false) // true
let h = !(4 > 3 && 10 < 12) // false
let i = !(4 > 3 && 10 > 12) // true
let j = !(4 === '4') // true

console.log(a,d,c,d,e,f,g,h,i,j);