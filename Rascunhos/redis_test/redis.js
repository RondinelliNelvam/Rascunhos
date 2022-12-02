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
  for (let i = 0, j = 1; j < newArray.length; i++, j++) {
    for (let a = 0; a < newArray[i].length; a++) {
      if (i === 0) {
        newArrayTwo.push([newArray[i][a], newArray[j][a]]);
      } else {
        newArrayTwo[a].push(newArray[j][a]);
      }
    }
  }
  console.log(newArrayTwo);
}

getAll();
