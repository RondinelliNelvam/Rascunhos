// new Date(Date.now + msdeumdia*parâmetroquequero)
// const start = performance.now();

// console.log(new Date().getUTCDate());
// console.log(
//   new Date(new Date().setUTCDate(new Date().getUTCDate())).getUTCDate() + 1
// );
// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);
// let helper = frequency.map((element) => {
//   return Sequelize.where(
//     Sequelize.fn(element.fn, Sequelize.col(jsonFrontEnd.column)),
//     eval(element.function.replace("{{qualquerpalavra}}", 7))
//   );
// }, {});
// console.log(...helper);
// Object.assign(where, { [Op.and]: [...helper] });
// console.log(
//   await database[jsonFrontEnd.tables].findAll({
//     attributes: addon,
//     raw: true,
//     where: where,
//     include: include,
//   })
// );
// let Alerts = {
//   Colaborador: async function (req) {
//     const checkValue = req;
//     const dateToday = new Date();

//     await [checkValue.tables].findAll();
//     let foundCollaborators = [];
//     let databaseColaborador;
//     let message;
//     const link = `URLFRONT` + "sic/colaboradores/visualizar/";
//     //Checar se tem aniversariante hoje
//     switch (checkValue.column) {
//       case "dataNascimento":
//         switch (checkValue.type) {
//           case "daily":
//             databaseColaborador = await Colaborador.findAll({
//               attributes: [...checkValue.addon, checkValue.column],
//               raw: true,
//               where: {
//                 SituacaoId: {
//                   [Op.ne]: 2,
//                 },
//                 [Op.and]: [
//                   Sequelize.where(
//                     Sequelize.fn("month", Sequelize.col("dataNascimento")),
//                     dateToday.getUTCMonth()
//                   ),
//                   Sequelize.where(
//                     Sequelize.fn("day", Sequelize.col("dataNascimento")),
//                     dateToday.getUTCDate()
//                   ),
//                 ],
//               },
//             });
//             if (databaseColaborador.length > 0) {
//               databaseColaborador.forEach((element) => {
//                 foundCollaborators.push(
//                   `<li><a href="${link + element.id}">${element.nome}</li>`
//                 );
//               });
//             }
//             message = `<h3>Olá,</h3>
//                       ${
//                         databaseColaborador.length > 1
//                           ? "<div>Os (as) aniversariantes do dia são:</div>"
//                           : "<div>O(a) aniversariante do dia é:</div>"
//                       }
//                       <ul>${foundCollaborators}</ul><br />
//                       <div>Atenciosamente,</div>
//                       <div>PSO Engenharia Elétrica</div>`;
//             //
//             break;

//           default:
//             databaseColaborador = await Colaborador.findAll({
//               attributes: [...checkValue.addon, checkValue.column],
//               raw: true,
//               where: {
//                 SituacaoId: {
//                   [Op.ne]: 2,
//                 },
//                 [Op.and]: [
//                   Sequelize.where(
//                     Sequelize.fn("month", Sequelize.col("dataNascimento")),
//                     dateToday.getUTCMonth()
//                   ),
//                 ],
//               },
//             });
//             if (databaseColaborador.length > 0) {
//               databaseColaborador.forEach((element) => {
//                 foundCollaborators.push(
//                   `<li><a href="${link + element.id}">${element.nome}</li>`
//                 );
//               });
//             }
//             message = `<h3>Olá,</h3>
//                         ${
//                           databaseColaborador.length > 1
//                             ? "<div>Os (as) aniversariantes do mês são:</div>"
//                             : "<div>O(a) aniversariante do mês é:</div>"
//                         }
//                         <ul>${foundCollaborators}</ul><br />
//                         <div>Atenciosamente,</div>
//                         <div>PSO Engenharia Elétrica</div>`;
//             break;
//         }
//         break;

//       case "dataVencimetoAso":
//         let firstDay;
//         let lastDay;
//         switch (checkValue.type) {
//           case "daily":
//             firstDay = new Date(
//               dateToday.getUTCFullYear(),
//               dateToday.getUTCMonth(),
//               dateToday.getDate()
//             );
//             lastDay = new Date(
//               dateToday.getUTCFullYear(),
//               dateToday.getUTCMonth(),
//               dateToday.getDate() + 1
//             );

//             break;

//           default:
//             firstDay = dateToday;
//             lastDay = new Date(
//               dateToday.getUTCFullYear(),
//               dateToday.getUTCMonth() + 1,
//               dateToday.getDate()
//             );
//             break;
//         }
//         databaseColaborador = await Colaborador.findAll({
//           attributes: [...checkValue.addon, checkValue.column],
//           raw: true,
//           where: {
//             dataVencimetoAso: {
//               [Op.gte]: firstDay,
//               [Op.lte]: lastDay,
//             },
//             SituacaoId: {
//               [Op.ne]: 2,
//             },
//           },
//         });
//         if (databaseColaborador.length > 0) {
//           databaseColaborador.forEach((element) => {
//             foundCollaborators.push(
//               `<li><a href="${link + element.id}">${element.nome}</li>`
//             );
//           });
//           message = `<h3>Olá,</h3>
//               ${
//                 jsonFrontEnd.type === "daily"
//                   ? "<h4>Os ASOs dos colaboradores a seguir venceram:</h4> "
//                   : "h4>Os ASOs dos colaboradores a seguir irão vencer em 30 dias:</h4> "
//               }
//               <ul>${foundCollaborators}</ul><br />
//                           <div>Atenciosamente,</div>
//                           <div>PSO Engenharia Elétrica</div>`;
//         }
//         break;
//     }
//     if (message) {
//       console.log(message);
//     }
//   },
//   Ativo: async function (req) {},
// };

// var teste = new CronJob(
//     fs0d9fusd,
//   function () {
//     Alerts[jsonFrontEnd.tables](jsonFrontEnd);
//   },
//   null,
//   true,
//   "UTC-1"
// );
