let firstcar = window.prompt('Escreva uma carácteristica do primeiro carro:')
let secondcar = window.prompt('Escreva uma carácteristoca do segundo carro')
let firtspeed = window.prompt('Escreva a velocidade do primeiro carro')
let secondspeed = window.prompt('Escreva a velocidade do segundo carro')

if(firtspeed > secondspeed){
    alert('O carro' +' ' +firstcar +' '+ 'está mais rápido')
}else if(firtspeed < secondspeed){
    alert('O carro' + ' ' +secondcar + ' ' +'está mais rápido')
}else if(firtspeed === secondspeed){
    alert('O carro'+ ' ' +firstcar + ' '+ ' e o' + ' ' + secondcar + ' ' +'estão andando na mesma velocidade')
}

let firstperson = window.prompt('Escreva o nome do primeiro personagem')
let firstperso = window.prompt('Escreva o poder de ataque do personagem')
let firstpers = window.prompt('Escreva quantos pontos de vida o personagem tem')
let firtsper = window.prompt('Escreva a quantidade de pontos de defesa deste personagem')
window.alert('O personagem' + ' ' + firstperson + ' ' + 'possui' + ' ' + firstperso + ' ' + 'de poder' + ' ' + firstpers + ' ' + 'de pontos de vida')

let secondperson = window.prompt('Escreva o nome do segundo persoagem')
let secondperso = window.prompt('Escreva o poder de ataque deste personagem')
let secondpers = window.prompt('Escreva quantos pontos de vida tem este personagem')
let secondper = window.prompt('Escreva a quantdade de pontos de defesa deste personagem')
let secu = window.confirm('Este personagem tem escudo?')
let life;
let lifet;
if(secu == true){
    alert('O personagem' + ' ' + secondperson + ' ' + 'possui' + ' ' + secondperso + ' ' + 'de poder' + ' ' + secondpers + ' ' + 'de pontos de vida e possui um escudo')
}else{
    alert('O personagem' + ' ' + secondperson + ' ' + 'possui' + ' ' + secondperso + ' ' + 'de poder' + ' ' + secondpers + ' ' + 'de pontos de vida e não possui escudo')
}
if(firstperso > secondper, secu == false){
    let danmage = firstperso - secondper
    life = secondpers - danmage
    alert('O dano foi de' + ' '+ danmage)
    alert('A vida agora é de ' + ' ' + life)
    alert('O personagem' + ' ' + secondperson + ' ' + 'possui' + ' ' + secondperso + ' ' + 'de poder' + ' ' + life + ' ' + 'de pontos de vida')
}else if(firstperso > secondper, secu == true){
    let danmaget = (firstperso - secondper) / 2 
    let lifet = secondpers - danmaget
    alert('O dano foi de' + ' ' + danmaget)
    alert('A vida agora é de'+ ' ' + lifet)
    alert('O personagem' + ' ' + secondperson + ' ' + 'possui' + ' ' + secondperso + ' ' + 'de poder' + ' ' + lifet + ' ' + 'de pontos de vida ')
}else if(firstperso <= secondper){
    alert('O dano foi de 0')
}
if(life <= 0 ){
    alert('A luta terminou pois o dano do' + ' ' + firstperson + ' ' + 'foi maior que a defesa do' + ' ' + secondperson)
}else{
    let luta = window.confirm('Deseja continuar a luta?')
}