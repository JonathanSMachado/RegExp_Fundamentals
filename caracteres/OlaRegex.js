const text = 'Olá Jonathan, bem vindo ao curso de fundamentos de expressões regulares';
const userName = /Jonathan/
const regex = RegExp('Jonathan')

console.log(text.match(/de/g))
console.log(text.match(userName))

console.log(regex.test(text))
