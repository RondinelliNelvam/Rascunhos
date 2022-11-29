//O método find() tem como função procurar em um Array o primeiro item que satisfaz determinada teste informado. Caso o mesmo não ache nenhum item, retornará como "undefined"

array1 = [1, 5, 7, 12, 84];

const found = array1.find((element) => element > 10);

console.log(found);
//Output: 12

//find(callback(element[, index[, array]])[, thisArg])

//O find tem no total até 2 parâmetros, o callback e o "thisArg".

//O parãmetro callback é obrigatória e é nesse parâmetro que será feito uma lógica para fazer uma validação que será executada em cada index do array, até achar o resultado correto. O callback é composto pelos seguintes parâmetros:
//element - é o valor atual do array que será processado conforme a lógica estabelecida.
//index - o atual index do valor que será processado conforme a lógica estabelecida.
//array - o array que atualmente está sendo processado.

array2 = [
  { name: "banana", quantity: 5 },
  { name: "maçã", quantity: 2 },
  { name: "abacaxi", quantity: 0 },
];

function checkBanana(fruit) {
  return fruit.name === "banana";
}
const found2 = array2.find(checkBanana);

//ou

const found2_1 = array2.find((element) => element.name === "banana");

console.log(found2);
console.log(found2_1);
//Output: { name: 'banana', quantity: 5 }

//A aplicação também funciona no caso de descontruir o objeto, como:
const found2_2 = array2.find(({ name }) => name === "banana");

console.log(found2_2);
//Output: { name: 'banana', quantity: 5 }

const found2_4 = array2.find(function (value, index, arr) {
  return arr[index].name === "banana"; // === value.name
});

console.log(found2_4);
//Output: { name: 'banana', quantity: 5 }

//O find() não precisa ser utilizado somente para retornar um valor, ele também pode funcionar para percorrer todo o objeto e aplicar alguma ação, como:

array2.find((value, index) => {
  console.log(
    "A fruta verificada atual é ",
    value,
    " que está na posição ",
    index,
    " do array"
  );
});

//Output: A fruta verificada atual é  { name: 'banana', quantity: 5 }  que está na posição  0  do array;A fruta verificada atual é  { name: 'maçã', quantity: 2 }  que está na posição  1  do array;A fruta verificada atual é  { name: 'abacaxi', quantity: 0 }  que está na posição  2  do array

//Nota: Caso o find ache um index sem valor, o mesmo tratará este index como "undefined"

//O thisArg é utilizado como método interativo, ou seja, é como aplicar um "this" dentro da callback.
