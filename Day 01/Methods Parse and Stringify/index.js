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

//JSON.parse() pode receber uma função como um segundo argumento que transforme os valores antes que os mesmo são retornados em forma de objeto.
