//For é um loop conforme uma determinada condição. a Sintaxe é:

//for (initialization; condition; afterthought){statement}

//initialization -> é o parâmetro que é responsável em inicializar a variavel responsável para contabilizar a quantidade de loops. Sendo let ou var(recomendável let)
//condition -> é o parâmetro responsável para determinar em qual condição o loop irá se manter
//afterthought -> Parâmetro responsável para acontecer no final de cada loop, normalmente é usada para fazer a o incremento da varíavel declarada que é responsável para contabilizar os loops.
//statement -> lógica que irá ser executada em cada loop

for (let i = 0; i < 9; i++) {
  console.log(i);
}
//Output: 0,1,2,3,4,5,6,7,8

//Caso a variavel de inicialização for declara anteriormente, não é necessário informar no loop
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  //Output: 0,1,2,3,4,5,6,7,8
}

//Igual a inicialização, a condição também é opcional, contudo, para não se ter um loop infinito, é recomendado aplicar um break para forçar o loop a terminar
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  //Output: 0,1,2,3,4
}
//Todas as condições podem ser omitidas, mas é sempre necessário aplicar um break no loop.

let j = 0;

for (;;) {
  if (j > 3) break;
  console.log(j);
  //Output: 0,1,2,3
  j++;
}

//Para funções assincronas, declarar a varíavel fora do for poderá acaretar possíveis problemas, uma vez que quando a função retornará o valor, ela irá aplicar o valor que a varíavel no momento do retorno, e não durante o inicio do processo, um exemplo é:

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  //Output: 0,1,2
}

let k = 0;
for (; k < 3; k++) {
  setTimeout(() => {
    console.log(k);
  }, 1000);
  //Output: 3,3,3
}

//O setTimeout irá ser aplicado após o processo do loop,no primeiro exemplo, ele irá retornar o valor que foi obtido no inicio do processo, enquanto o segundo irá aplicar o valor atual da variável k no momento da aplicação do console.log. A aplicação
//do tipo 'var' para declarar a variável também resultará nesse problema.

//è possível criar varias variaveis e funções na inicialização e no final da sessão, conforme informado abaixo
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
  //output:
  // 1 6
  // 2 5
  // 3 4
}
