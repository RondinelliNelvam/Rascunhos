function Operacoes() {
    this.resultadoSoma = 0
    this.resultadoSubtracao = 0
}
Operacoes.prototype.adicionar = function(arrayNumeros) {
    arrayNumeros.forEach((elemento) => {
      this.resultadoSoma += elemento;
    }, this)
}
Operacoes.prototype.subtrair = function(arrayNumeros) {
    arrayNumeros.forEach((elemento, indice) => {
        if (indice == 0)
            this.resultadoSubtracao = elemento;
        else
            this.resultadoSubtracao -= elemento;
    }, this)
}
var operacoesMatematicas = new Operacoes();
operacoesMatematicas.adicionar([5,10,20]);
console.log("O resultado da soma é " + operacoesMatematicas.resultadoSoma);
operacoesMatematicas.subtrair([200,100,50]);
console.log("O resultado da subtração é " + operacoesMatematicas.resultadoSubtracao);
/*saída:
O resultado da soma é 35
O resultado da subtração é 50
*/
