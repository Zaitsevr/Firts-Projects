function triangulo (base, altura){
    return (base * altura)/2;
}
function retangulo (base, altura){
   return (base * altura);
}
function quadrado(lado){
    return (lado * lado);
}
function trapezio(basemaior, basemenor, altura){
    return (basemaior + basemenor) * altura /2;
}
function circulo(raio){
    return Math.PI * (raio **2);
    //para utilizar o PI como 3,14 basta utilziar o Math.PI
}
do{
    let option = prompt("Escolha uma das opções: a) Triângulo \n b) Retângulo \n c) Quadrado \n d) Trapézio \n e) Círculo");
    alert("A forma geométrica escolhida foi:" + " " + option);
    
    
    switch(option){

        case 'a':
            let basetriangulo = parseFloat(prompt("Escreva a medida da base do trinângulo"))
            let alturatriangulo = parseFloat(prompt("Escreva a altura do triângulo"))
            let area;
            area = triangulo(basetriangulo , alturatriangulo);
            alert("A área desse triângulo é igual a:" + " " + area);
            break;
        
        case 'b':
            let baseretangulo = parseFloat(prompt("Escreva a medida da base do retângulo"))
            let alturaretangulo = parseFloat(prompt(" Escreva a altura do retângulo"))
            let arearetangulo;
            arearetangulo = retangulo(baseretangulo, alturaretangulo);
            alert("A área desse retângulo é igual a:" + " " + arearetangulo);
            break;

        case 'c':
            let ladoquadrado = parseFloat(prompt("Escreva a medida do lado desse quadrado"))
            let areaquadrado;
            areaquadrado = quadrado(ladoquadrado);
            alert("A área desse quadrado é igual a:" + " " + areaquadrado);
            break;

        case 'd':
            let basemaiortrapezio = parseFloat(prompt("Escreva o valor da base maior do trapézio"))
            let basemenortrapezio = parseFloat(prompt("Escreva a medida da base menor do trapézio"))
            let alturatrapezio = parseFloat(prompt("Escreva a altura do trapézio"))
            let areatrapezio;
            if(basemaiortrapezio > basemenortrapezio){
                areatrapezio = trapezio(basemaiortrapezio, basemenortrapezio, alturatrapezio);
                alert("A área do trapézio é igual a : " + " " + areatrapezio);
            }else{
                areatrapezio = trapezio(basemenortrapezio, basemaiortrapezio, alturatrapezio);
                alert("A área do trapézio é igual a : " + " " + areatrapezio);
            }
            break;
            case 'e':
                let raiocirculo = parseFloat(prompt("Escreva o raio do círculo:"));
                let areacirculo;
            
                if (raiocirculo > 0) {
                    // Se o raio for válido, calcula a área
                    areacirculo = circulo(raiocirculo);
                    alert("A área do círculo é igual a: " + areacirculo);
                } else {
                    // Pergunta ao usuário se ele sabe o raio
                    if (confirm("Você sabe o raio do círculo?")) {
                        raiocirculo = parseFloat(prompt("Escreva o raio do círculo:"));
                        if (raiocirculo > 0) {
                            areacirculo = circulo(raiocirculo);
                            alert("A área do círculo é igual a: " + areacirculo);
                        } else {
                            alert("Valor inválido para o raio!");
                        }
                    } else if (confirm("Você sabe o diâmetro do círculo?")) {
                        // Pergunta se o usuário sabe o diâmetro
                        let diametrocirculo = parseFloat(prompt("Qual é o diâmetro do círculo?"));
                        if (diametrocirculo > 0) {
                            let raiocirculo2 = diametrocirculo / 2;
                            areacirculo = circulo(raiocirculo2);
                            alert("A área do círculo é igual a: " + areacirculo);
                        } else {
                            alert("Valor inválido para o diâmetro!");
                        }
                    } else {
                        // Se o usuário não sabe nem o raio nem o diâmetro
                        alert("Vai estudar um pouco mais.");
                    }
                }
                break;
    }        
}while(confirm("Deseja realizar outra operação?"))
