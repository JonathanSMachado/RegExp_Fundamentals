const text = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPares = /[02468]/g

console.log(text.match(regexPares))

const text2 = 'Jonathan não vai andar na moto'

console.log(text2.match(/n[aã]/g))