//let name = window.prompt('Qual o seu nome?')
//let opitions;
//do{
 //opitions = prompt('Escolha umas da opções: \n a)Loging \n b) Register \n c) Visitant \n d) Error \n e) Encerrando')
 //alert('A opção escolhida foi' + ' ' + opitions)
 //switch(opitions){
   // case 'a':
     //   alert('Erro')
       // break;
    //case 'b':
      //  alert('Erro')
        //break;
    //case 'c':
      //  alert('Erro')
        //break;
    //case 'd':
      //  alert('Erro')
        //break;
    //case 'e':
      //  alert('Encerrando sistema')
       // break;
//}

//}while(opitions != 'e'){
    
//}
//Nesse exercicio eu descobri que o switch deve estar dentro do DO para funcionar, fui lembrado que posso declarar uma variável universal
// para utilizar dentro do DO e a cada caso do switch tem que ter um break para não serem executados todos os casos

let nome = window.prompt('Qual o seu nome?')
let money = window.prompt('Quanto dinheiro você tem no banco?')
let cash;
let dinheiro;
do{
    let option = window.prompt('Você tem no banco: \n ' + money +' Reais \n' + 'Você escolha a opção que você deseja: \n a) Adicionar dinheiro \n b) Remover dinheiro \n c) Encerrar operação')
    alert('A opção escolhida foi a:' + ' ' + option )
    switch(option){
        case 'a':
            cash = window.prompt('Quanto você deseja adicionar?')
            let confirm = window.confirm('Você iriá adicionar' + ' ' + cash + ' ' + 'a sua conta')
            dinheiro = Number(money) + Number(cash)
            alert('O total da sua conta Sr.' + ' ' + nome + ' ' + 'é de' + ' ' + dinheiro + ' ' + 'Reais')
            break;
        case 'b':
            cash = window.prompt('Quanto você deseja retirar?')
            let confirmn = window.confirm('Você iriá retirar' + ' ' + cash + ' ' + 'da sua conta')
            dinheiro = Number(money) - Number(cash)
            alert('O total da sua conta Sr.' + ' ' + nome + ' ' + 'é de' + ' ' + dinheiro + ' ' + 'Reais')
            break;
        case 'c':
            alert('Encerrando sistema')
            break;
    }
}while(dinheiro != 'e'){
    
}

