const text = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log(text.split(regexVirgula))
console.log(text.match(regexVirgula))

console.log(text.match(/,/g))
console.log(text.match(/a/))
console.log(text.match(/2/))