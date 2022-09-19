let { dbExample } = require("../utils/dbExample");
var _ = require('lodash');


dbExample = _(dbExample)
.map((e)=>({
  id: e.itemName,
  estoque:_(e.allHistoric)
  .groupBy("branchId","type")
  .map((e)=>{
    let entrada = 0;
    let saida = 0;
    let reserva = 0;
    let filial = null;

    e.map((e)=>{
      if (e.type =='Entrada') entrada+=e.quantity;
      if (e.type =='Saida') saida+=e.quantity;
      if (e.type =='Reserva') reserva+=e.quantity;
      filial = e.branchId;


    })
    return {entrada,saida,reserva,filial}
  })
})).value()

console.log((dbExample))

// let algo = dbExample.map((item, index) => {
//   for (let i = 0; i < branchExample.length; i++) {
//     let key = branchExample[index].branchName;

//     const calculation = item.allHistoric.reduce(
//       (acumulator, currentValue) => {
//         acumulator[`totalValueFrom${key}`] += currentValue.quantity;
//         return acumulator;
//       },
//       { [`totalValueFrom${key}`]: 0 }
//     );
//     return { ...dbExample, ...calculation };
//   }
// });
// console.log(Object.values({ ...algo, ...object2 }));
// console.log("---");
// console.log(Object.values(algo));

// // console.log({ ...algo, ...object2 });

// // console.log(algo);
// // console.log(dbExample[0].allHistoric);
