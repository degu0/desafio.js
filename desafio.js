//array principal
var lista = [6, 30, 88, 79, 90, 35, 75, 84, 77, 32, 2, 90, 84, 90, 92, 34, 76, 4, 78, 73, 41];
//Criando duas arrays(listas) para divasão da array principal, em pares e impares
var listaPar = [];
var listaImpar = [];
//numeroLista % 2 == 0 (true = par ou false = impar) separação de lista entre par e impar

contador = 0;
//while de divisão dos valores do array principal para os outros arrays. arrayPar com valores pares do array principal e arrayImpar com valores impares do array principal
while (contador < 21){
    numeroLista = lista[contador];
    if (numeroLista % 2 == 0) {
        listaPar.push(numeroLista);
        contador++;
    }else if (numeroLista % 2 != 0){
        listaImpar.push(numeroLista);
        contador++;
    }
};
contador = 0;
let valor1 = 0;
let valor2 = null;
//while para comparar e armazenar os dois maiores valores do arrayPar 
while(contador <= listaPar.length){
     if(listaPar[contador] > valor1){
         valor1 = listaPar[contador];
     }else{
        if(listaPar[contador] > valor2){
            valor2 = listaPar[contador];
        }   
     }
    contador++;
}

console.log("O maior numero par do array é "+valor1+". E o segundo maior é "+valor2);

contador = 0;
let valorI1 = 0;
let valorI2 = null;
//while para comparar e armazenar os dois maiores valores do arrayImpar
while(contador <= listaImpar.length){
    if(listaImpar[contador] > valorI1){
            valorI1 = listaImpar[contador];
    }else{
       if(listaImpar[contador] > valorI2){
           valorI2 = listaImpar[contador];
       }   
    }
   contador++;
}

console.log("O maior numero impar do array é "+valorI1+". E o segundo maior é "+valorI2);

