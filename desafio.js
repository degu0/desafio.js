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
contador2 = 0;
contador3 = 0;
numeroLista21 = 1;
var numeroListaFinalPar = [];
var numeroListaFinalImpar = []; 
//enquanto dois maiores valores estiver na lista final, vai para o laço de repetição
while (numeroListaFinalPar){
    numeroLista2 = listaPar[contador2];
    numeroLista3 = listaImpar[contador3];
   if (numeroLista2 >= numeroLista21){   
    numeroLista2 = numeroLista2;
    //se o primeiro valor for maior que o outro, será adicionado dois valores na lista final, mas se aparecer outro numero maior um deles, será apagado da lista
   }else if(numeroLista21 >= numeroLista2){
    numeroLista2 = numeroLista21;
   }
}
 console.log(listaPar);
 console.log(listaImpar);
