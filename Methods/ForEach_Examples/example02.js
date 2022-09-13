var arrayNumeros = [1,2,3,4,5,6];
function verificaPares(elemento, indice){
    if (elemento % 2 == 0) 
    console.log("O número : " + elemento + " corresponde ao índice " + indice + " do arrayNumeros");
}
arrayNumeros.forEach(verificaPares);
/*saída:
O número 2 corresponde ao índice 1 do arrayNumeros 
O número 4 corresponde ao índice 3 do arrayNumeros 
O número 6 corresponde ao índice 5 do arrayNumeros
*/