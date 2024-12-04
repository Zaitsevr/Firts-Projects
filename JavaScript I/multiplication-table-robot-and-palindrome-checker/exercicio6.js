let name = window.prompt('Qual o seu nome?')
let number = window.prompt('Escreva o numero que deseja calcula')
let num = 0;
for(Number(num) * Number(number); num <= 20; num++ ){
    alert('Este número multiplicado por'+' '+ num +  ' ' + 'é igual a: ' + ' ' +  Number(num) * Number(number))
}

function verificarPalindromo() {
    var palavra = prompt("Por favor, informe uma palavra:");
    var ePalindromo = true;
  
    for (var i = 0; i < palavra.length / 2; i++) {
      if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        ePalindromo = false;
        break;
      }
    }
  
    if (ePalindromo) {
      alert(palavra + " é um palíndromo.");
    } else {
      var palavraInvertida = '';
      for (var i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
      }
      alert(palavra + " não é um palíndromo.\nDe trás para frente fica: " + palavraInvertida);
    }
  }
  
  verificarPalindromo();
  