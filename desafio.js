var lista = [6, 30, 88, 79, 90, 35, 75, 84, 77, 32, 2, 90, 84, 90, 92, 34, 76, 4, 78, 73, 41];
var listaPar = [];
var listaImpar = [];
//numeroLista % 2 == 0 (true = par ou false = impar) separação de lista entre par e impar
//num > num2 (true = num ou false = num2) 2 vezes a cada lista 
//console.log()

contador = 0;
while (contador < 21){
    numeroLista = lista[contador];
    if (numeroLista % 2 == 0) {
        listaPar.push(numeroLista);
        contador++
    }else if (numeroLista % 2 != 0){
        listaImpar.push(numeroLista);
        contador++;
    }
};
listaPar.sort(); 
listaImpar.sort();
// contador2 = 0;
// contador3 = 0;
// var listaFinalPar = [];
// var listaFinalImpar = []; 
//enquanto dois maiores valores estiver na lista final, vai para o laço de repetição
// while (contador2 < 16 || contador3 < 6){
//     numeroLista2 = listaPar[contador2];
//     numeroLista3 = listaImpar[contador3];
//     numeroLista21 = listaPar[contador2++];
//     numeroLista31 = listaImpar[contador3++];
//    if (numeroLista2 >= numeroLista21){   
//     numeroLista2 = numeroLista2;
//     listaFinalPar.push(numeroLista2);
//    }else if(numeroLista21 >= numeroLista2){
//     numeroLista2 = numeroLista21;
//     listaFinalPar.push(numeroLista2);
//    };
//     if (numeroLista3 >= numeroLista31){   
//     numeroLista3 = numeroLista3;
//     listaFinalImpar.push(numeroLista3);
//    }else if(numeroLista31 >= numeroLista3){
//     numeroLista3 = numeroLista31;
//     listaFinalImpar.push(numeroLista31);
//    };
// };
var numeroPar1 = listaPar[13];
var numeroPar2 = listaPar[14];
var numeroImpar1 = listaImpar[4];
var numeroImpar2 = listaImpar[5];
// console.log(listaPar);
// console.log(listaImpar);
console.log(lista);
console.log("O maior numero par do array eh "+numeroPar2+". E o segundo maior eh "+numeroPar1);
console.log("O maior numero impar do array eh "+numeroImpar2+". E o segundo maior eh "+numeroImpar1);

// console.log(listaFinalPar)
 //Mostrar so os dois ultimos de uma tabela
//  console.log(listaFinalPar.slice(14, 15));
//  console.log(listaFinalImpar.slice(4, 5));
//se o primeiro valor for maior que o outro, será adicionado dois valores na lista final, mas se aparecer outro numero maior um deles, será apagado da lista
