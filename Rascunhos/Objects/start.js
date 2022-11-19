let meuCarro = {
  fabricacao: "Ford",
  modelo: "Mustang",
  Ano: 1990,
  semValor: null,
};

console.log(meuCarro.fabricacao);
console.log(meuCarro.semValor);
console.log(meuCarro.semPropriedade);
console.log(meuCarro["modelo"]);
//Criação de objeto pode ser feito da forma a seguir, contudo, é necessário aplicar as propriedades posteriormente
let meuObj = new Object();

(str = "minhaString"), (aleat = Math.random()), (obj = new Object());

meuObj.tipo = "Sintaxe de Ponto";
meuObj["data da criacao"] = "String com espaço";
meuObj[str] = "valor de String";
meuObj[aleat] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

//Aplica-se um erro abaixo devido ao espaço. Propriedades utilizando-se do metodo Obj.Prop não aceitam espaço, contudo utilizando-se do metodo Obj["prop"] dá
// console.log(meuObj.data da criacao)

// console.log(meuObj["data da criacao"]);
// console.log(meuObj["tipo"]);
// console.log(meuObj.tipo);

// console.log(meuObj);

let nomeDaPropriedade = "fabricacao";

// console.log(meuCarro[nomeDaPropriedade]);

function mostrarProps(obj, nomeDoObj) {
  let resultado = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}

// console.log(mostrarProps(meuCarro, "meuCarro"));
// console.log(Object.keys(meuCarro));
// console.log(Object.getOwnPropertyNames(meuCarro));
// const arr = ["a", "b", "c"];
// console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.

var prop = "foo";
var a = "a";
var b = "c";
var o = {
  [prop]: "hey",
  [a + b]: "there",
  // bar: "test",
};

console.log(o);

var oneObject = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};

console.log(oneObject);
