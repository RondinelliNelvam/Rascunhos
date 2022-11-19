var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
    console.log("A marca " + marca + " corresponde ao índice: " + indice);
    if (marca === 'BMW'){
        let itemExcluido = arrayMarcas.shift();
        console.log("Excluímos o elemento " + itemExcluido);
    }
});
/* saída:
A marca Ford corresponde ao índice: 0
A marca BMW corresponde ao índice: 1
Excluímos o elemento Ford
A marca Audi corresponde ao índice: 2
A marca Volkswagen corresponde ao índice: 3
*/
﻿