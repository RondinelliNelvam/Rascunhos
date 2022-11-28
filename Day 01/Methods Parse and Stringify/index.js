const { jsonExampleInString } = require("../../utils/utils");

//O formato JSON é uma derivação da syntax do objeto do javascript. Onde o seu um formato é composto por "key":"value" renderizado dentro de chaves.
//Contudo, o JSON pode vir de diversas formas, uma delas é como uma String.
//Portanto, para fazer a transformação de uma string para o formato padrão do JSON, é necessário aplicar JSON.parse.
//Contanto que a String respeite a formatação padrão do JSON (Ex: {"key":"value"}) a função .parse() retornará a String ou Variável no formato padrão JSON.
const objectJSON = JSON.parse(jsonExampleInString);

console.log(objectJSON);
//Output: {
//   name: 'Person01',
//   email: 'person01@someEmail.com',
//   type: 'something',
//   array: [ { ar: '1' }, { Cr: '2' } ]
// }
//Como é um objeto, dados do objectJSON podem ser acessados conforme syntax de objetos do javascript
console.log(objectJSON.array[1]);
//Output: { Cr: '2' }

//A função JSON.parse() não altera a variavel original, portanto o valor se mantém.
const objectString = jsonExampleInString;

const objectJSON2 = JSON.parse(objectString);

console.log(objectString);
//Output: {"name":"Person01","email":"person01@someEmail.com","type":"something", "array":[{"ar":"1"}, {"Cr":"2"}]}

//Json.parse(string[, reviver]) => O JSON.parse recebe dois parâmetros, a primeira é a string que será analisado e transformado em objeto e o
//Reviver poderá receber uma função que analisa previamente os valores e transforma conforme analisado antes de retorna-los em forma de objeto.

let ObjectToStringWithFunction = JSON.parse(
  jsonExampleInString,
  (key, value) => {
    if (typeof value === "string") {
      return value.toUpperCase();
    }
    return value;
  }
);
//Neste codigo a função verifica todos os campos de value no objeto, e se elas forem do tipo STRING, o transforma todas as letras em uppercase,
console.log(ObjectToStringWithFunction);
//Output: { name: 'PERSON01', email: 'PERSON01@SOMEEMAIL.COM', type: 'SOMETHING', array: [ { ar: '1' }, { Cr: '2' } ]}

//JSON.stringify(valor[, replacer[, espaço]]) ==> O JSON.stringify recebe até três parâmetros, a primeira que é obrigatória é o valor, que é o parâmetro responsável
//por adquirir um valor, analisa-lo e transforma-lo em uma unica string.
//O Parâmetro Replacer é opcional e tem como função em alterar os valores analisados durante o processo de transformação em string. Pode ser usado como filtro para
//verificar quais os valores a serem incluidos no objeto JSON
//Parâmetro espaço é opcional e tem como função para incluir espaços em brancos no final da string, caso necessário. Caso for um número, será a quantidade de espaços em brancos,
//no caso de string, será a string usada como espaço em branco.

//Este exemplo mostra a utilização do Replacer. Neste caso a função replacer verificará o
function replacer(key, value) {
  // console.log(typeof value);
  if (key === "email") {
    return undefined;
  }
  return value;
}

let userStrReplace = JSON.stringify(objectJSON, replacer);

console.log(userStrReplace);
//output: {"name":"Person01","type":"something","array":[{"ar":"1"},{"Cr":"2"}]}

let userStrSpace = JSON.stringify(objectJSON, null, "...");

console.log(userStrSpace);
//output: {{..."name": "Person01",..."email": "person01@someEmail.com",..."type": "something",..."array": [......{........."ar": "1"......},......{........."Cr": "2"......}...]}}
