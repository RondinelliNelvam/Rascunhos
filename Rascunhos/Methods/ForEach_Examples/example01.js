var arrayNumeros = [1,2,3,4,5,6];
function verificaPares(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento);
}
arrayNumeros.forEach(verificaPares);
/*saída:
2
4
6
*/