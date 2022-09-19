const { branchExample } = require("../utils/utils");
const { dbExample } = require("../utils/dbExample");
const { values } = require("lodash");
object1 = [
  {
    positivo: 0,
    negativo: 0,
  },
  {
    algo: 0,
    sim: 0,
  },
];
object2 = ["a"];
// let key = object2[0].teste;
let teste = []
let calculation = []
let algo = dbExample.map((item, index) => {
  for (let i = 0; i < branchExample.length; i++) {
    let key = branchExample[index].branchName;
    teste = item.allHistoric.filter((value) => {
     if (value.branchId === index)
     return value
    calculation = teste.reduce(
      (acumulator, currentValue) => {
        acumulator[`totalValueFrom${key}`] += currentValue.quantity;
        console.log(acumulator)
        return acumulator;
      },
      { [`totalValueFrom${key}`]: 0 }
    );
    })
    console.log(calculation)
    return { ...dbExample, ...calculation };
  }
});


// console.log(Object.values(algo));
// console.log(Object.values({ ...algo, ...object2 }));
// console.log("---");
// console.log(Object.values(algo));

// console.log({ ...algo, ...object2 });

// console.log(algo);
// console.log(dbExample[0].allHistoric);
