const { branchExample } = require("../utils/utils");
const { dbExample } = require("../utils/dbExample");
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

let algo = dbExample.map((item, index) => {
  for (let i = 0; i < branchExample.length; i++) {
    let key = branchExample[index].branchName;
    const calculation = item.allHistoric.reduce(
      (acumulator, currentValue) => {
        acumulator[`totalValueFrom${key}`] += currentValue.quantity;
        return acumulator;
      },
      { [`totalValueFrom${key}`]: 0 }
    );
    return { ...dbExample, ...calculation };
  }
});
console.log(Object.values(algo));
// console.log(Object.values({ ...algo, ...object2 }));
// console.log("---");
// console.log(Object.values(algo));

// console.log({ ...algo, ...object2 });

// console.log(algo);
// console.log(dbExample[0].allHistoric);
