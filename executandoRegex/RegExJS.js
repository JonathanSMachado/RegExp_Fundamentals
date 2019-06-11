const text = '1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const nove = RegExp('9')
console.log(nove.exec(text))
console.log(nove.test(text))

const letras = /[a-z]/g
console.log(text.match(letras))
console.log(text.search(letras))

console.log(text.replace(',', '|'))
console.log(text.split(','))