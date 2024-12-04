let name = window.prompt('Qual o seu nome?')
let city = window.confirm('Você conhece alguma cidade?')
let cities = [];
while(city == true){
    let cityes = window.prompt('Qual outra cidade voê conhece?')
    cities.push(cityes);
    confirm(' Você conhece' + ' ' + cityes + ' ?')
   let citt = window.confirm(' Você conhece outra cidade?')
if(citt == false){
    alert('Você conhece estas cidade Sr.' + name + ':\n' + cities.join('\n'))
    break;
}
}
