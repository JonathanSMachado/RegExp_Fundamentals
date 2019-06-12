// . ? * + - ^ $ | [] {} () \ :
const text = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./

console.log(text.match(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g

console.log(text.split(regexSimbolos))