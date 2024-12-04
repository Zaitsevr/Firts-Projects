let nome = window.prompt('Insira apenas o sou primeiro nome')
let sobrenome = window.prompt('Insira apenas o seu sobrenome')
let estudo = window.prompt('Insira o seu campo de estudo')
let idade = window.prompt('Insira o ano em que você nasceu')

console.log('Seu nome completo é:', nome + " " + sobrenome)
console.log('Sua área de estudo é:', estudo)
let anos = 2023 - idade
console.log('Sua idade é:', anos, 'anos')

let número = window.prompt('Escreva o primeiro número')
let númer = window.prompt('Escreva o segundo número')
let núme =  Number(número) + Number(númer)
let núm = número - númer
let nú = número * númer
let n = número / númer
console.log('A soma destes dois números é:', número, '+', númer, '=', núme)
console.log('A subtração destes dois números é:', número, '-', númer, '=', núm)
console.log('A multiplicação destes dois números é:', número, '*', númer, '=', nú)
console.log('A divisão destes dois números é:', número, '/', númer, '=', n)
