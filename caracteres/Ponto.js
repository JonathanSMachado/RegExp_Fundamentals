// . é um coringa

const text = '1,2,3,4,5,6,7,8,9,0'

console.log(text.match(/1.2/g))
console.log(text.match(/1..2/g))
console.log(text.match(/1..,/g))

const text2 = '8.3,7.1,8.8,10.0'

console.log(text2.match(/8../g))
console.log(text2.match(/.\../g))