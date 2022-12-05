const redisclient = require("./app");

async function getOne() {
  let value = await redisclient.lRange("1", 4, 5);
  console.log(value);
  let teste = JSON.parse(value);
  let valor = teste.reduce((accumulator, element) => {
    return Object.assign(accumulator, element);
  }, {});
  console.log(valor);
}

async function getAll() {
  let newArrayTwo = [];
  let value = await redisclient.lRange("1", 0, -1);
  // console.log(value);
  let newArray = value.map((element) => JSON.parse(element));
  newArrayTwo = newArray[0].map((element) => element);

  for (let i = 0, j = 1; j < newArray.length; i++, j++) {
    for (let a = 0; a < newArrayTwo.length; a++) {
      newArrayTwo[a][Object.keys(newArrayTwo[a])[0]].push(
        ...newArray[j][a][Object.keys(newArray[j][a])[0]]
      );
    }
  }
  console.log(newArrayTwo[0]);
}
// ..newArray[j][a][Object.keys(newArray[j][a])[0]
getAll();
