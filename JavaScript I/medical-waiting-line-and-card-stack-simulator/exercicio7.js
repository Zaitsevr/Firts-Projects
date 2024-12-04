/*let arr = [];
let tamanho;
let nome;
do{
    let option = window.prompt('Eescolha a opção que você deseja \n a)Registrar um passiente\n b) Consulatar o próximo cliente\n c) sair\n d) Encerrar programa');
    alert('A opção escolhida foi:' + ' ' + option);
    switch(option){
        case 'a':
            nome = window.prompt('Insira o nome do passiente');
            arr.push(nome);
            alert('Os passientes são:' + arr.length);     //lembrar que para arrays não se coloca a variavel tamanho coloca arr.length
                break; //O código solicita o nome do paciente com nome = window.prompt('Insira o nome do paciente') e, em seguida, adiciona esse nome à matriz com arr.push(nome).
        case 'b':
        tamanho = arr.shift()           //O código usa tamanho = arr.shift() para remover o primeiro elemento da matriz arr e atribuí-lo à variável tamanho.
        alert('Você esta consultando' + tamanho);
        break;
        case 'c':
            break;
        case 'd':
            alert("Encerrando o sistema");
            break;
    }
}while(tamanho !== 'e'){
    
}*/


let arr = [];
let carta;
let nipe;
let cartaRemovida;

do {
  let option = window.prompt('Escolha uma das opções:\n a) Adicionar uma carta \n b) Remover uma carta \n c) Encerrar programa ');
  alert('A opção escolhida foi ' + option);

  switch (option){
    case 'a':
      carta = window.prompt('Insira o número da carta');
      nipe = window.prompt('Insira o nipe da carta');
      arr.push(`${carta} de ${nipe}`);
      alert('A carta colocada foi ' + `${carta} de ${nipe}`);
      break; 
    case 'b':
      cartaRemovida = arr.pop(); // Remove a última carta e a armazena em cartaRemovida
      if (cartaRemovida) {
        alert('Você removeu a carta ' + cartaRemovida);
      } else {
        alert('Não há cartas para remover.');
      }
      break;    
    case 'c':
      alert('Encerrando programa');
      break; 
    default:
      alert('Opção inválida.');
    }
} while (option !== 'c'); // O loop continua até que a opção "c" seja escolhida*/

