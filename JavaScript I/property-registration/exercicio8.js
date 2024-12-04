let nomeproprietario = [];
let banheiros = [];
let quantidadequartos = [];
let garagem = [];
let nomeimov = [];

do {
    let option = prompt("Escolha uma das opções: \n a) Inscrever um imóvel \n b) Visualizar todos os imóveis cadastrados \n c) Ver todos os imóveis e suas características");
    alert("A opção escolhida foi " + option);

    switch(option) {
        case 'a':
            // Cadastro de informações sobre o imóvel
            let imim = prompt("Qual o nome do imóvel?"); // como está  dentro de um laço de repetição não tem necessidade que colocar dentro de outro laço for
            nomeimov.push(imim);

            let nome = prompt("Qual o nome do proprietário?");
            nomeproprietario.push(nome);

            let baban = prompt("Quantos banheiros há nesse imóvel?");
            banheiros.push(baban);

            let quatquat = prompt("Qual a quantidade de quartos neste imóvel?");
            quantidadequartos.push(quatquat);

            let gaga = prompt("Esse imóvel possui garagem? (Sim/Não)");
            garagem.push(gaga);
            
            break; //lembrar de colocar o break ao finla do "case"

        case 'b':
            // Mostrar todos os imóveis cadastrados
            for (let m = 0; m < nomeimov.length; m++) {
                alert("Nome do imóvel: " + nomeimov[m]);
            }
            break;

        case 'c':
            // Mostrar todos os imóveis e suas características
            for (let i = 0; i < nomeimov.length; i++) {
                alert("Imóvel: " + nomeimov[i] +
                      "\nProprietário: " + nomeproprietario[i] +
                      "\nBanheiros: " + banheiros[i] +
                      "\nQuartos: " + quantidadequartos[i] +
                      "\nGaragem: " + garagem[i]);
            }
            break;

        default:
            alert("Opção inválida. Por favor, escolha a, b ou c.");
    }
} while (confirm("Deseja realizar outra operação?"));
