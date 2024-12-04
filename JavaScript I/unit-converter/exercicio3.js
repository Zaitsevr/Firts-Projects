let medida = window.prompt('Escreva uma medida em metros')
let escolhida = window.prompt('Escolha qual vai cer a unidade de medida que vamos tranformar essa medida:\n a) milímetro (mm)\n b) centímetro (cm)\n c) decímetro (dm)\n d) decâmetro (dam)\n e) hectômetro (hm)\n f) quilômetro (km) ')
let mediadanumerica = parseFloat(medida)
switch(escolhida){
    case 'a':
     mediadanumerica = mediadanumerica * 1000
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    case 'b':
     mediadanumerica = mediadanumerica * 100
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    case 'c':
     mediadanumerica = mediadanumerica * 10
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    case 'd':
     mediadanumerica = mediadanumerica / 10
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    case 'e':
     mediadanumerica = mediadanumerica / 100
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    case 'f':
     mediadanumerica = mediadanumerica / 1000
     alert('A conversão de' + ' ' + medida +  ' ' + 'metros para milímetros ficou' + ' ' + mediadanumerica)
     break
    default:
     alert('Opção não encontrada')

    
    

     
               
}