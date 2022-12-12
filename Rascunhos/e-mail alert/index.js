var CronJob = require("cron").CronJob;
var moment = require("moment");

const listaSemanal = {
  "Segunda-Feira": 1,
  "Terça-Feira": 2,
  "Quarta-Feira": 3,
  "Quinta-Feira": 4,
  "Sexta-Feira": 5,
  Sabado: 6,
  Domingo: 7,
};

//No front End, será validado o range do type conforme o objeto abaixo:
validateTypeAndRange = {
  daily: {
    range: "0-23", //Possivelmente será fixo na madrugada, como por exemplo, 3hrs da manhã
  },
  weekly: {
    range: "1-7",
  },
  monthly: {
    range: "1-31",
  },
};

const jsonFrontEnd = {
  id: 1,
  idCron: "a1038f4a-40e0-4f0f-8707-a3879fb506f3",
  tables: "Colaborador",
  column: "dataNascimento",
  addon: ["nome"],
  type: "daily",
  range: '{"range":1,"antecipated":1}',
  emails: ["email01@e51251.com", "email02@g35t23.com"],
};

const database = {
  Colaborador: [
    {
      id: 01,
      nome: "Marquinho",
      dataNascimento: new Date("1987-12-25"),
      FuncaoId: 1,
      SituacaoId: 2,
      email: "email@5233523.com",
      telefone: "516516",
    },
    {
      id: 02,
      nome: "José",
      dataNascimento: new Date("1974-12-15"),
      FuncaoId: 2,
      SituacaoId: 2,
      email: "email@756756.com",
      telefone: "4234234",
    },
    {
      id: 03,
      nome: "Lucas",
      dataNascimento: new Date("1988-12-08"),
      FuncaoId: 4,
      SituacaoId: 2,
      email: "email@5252352.com",
      telefone: "4234265342",
    },
    {
      id: 04,
      nome: "Zeca",
      dataNascimento: new Date("1987-12-08"),
      FuncaoId: 6,
      SituacaoId: 2,
      email: "email@213231.com",
      telefone: "52352356",
    },
    {
      id: 05,
      nome: "Carlitos",
      dataNascimento: new Date("1974-08-19"),
      FuncaoId: 7,
      SituacaoId: 2,
      email: "email@123123.com",
      telefone: "34252352",
    },
    {
      id: 06,
      nome: "Maria",
      dataNascimento: new Date("1988-08-30"),
      FuncaoId: 2,
      SituacaoId: 2,
      email: "email@423523.com",
      telefone: "52352352",
    },
  ],
};

const { sendEmail } = require("./emails");

let Alerts = {
  Colaborador: async function (req) {
    const dataInicio = new Date(
      moment().subtract(1, "days").format("YYYY-MM-DD")
    );
    console.log(dataInicio);
    const dataFim = new Date(
      moment(new Date(moment().format("YYYY-MM-DD")))
        .subtract(1, "seconds")
        .format("YYYY-MM-DD HH:mm:ss")
    );

    console.log(dataFim);

    const checkvalue = req;
    const range = JSON.parse(checkvalue.range);
    let checkToSendEmail = false;
    dateToday = new Date();
    dateTodayInString = dateToday.toLocaleDateString("en-us", {
      day: "numeric",
      month: "numeric",
      UTC: "0",
    });
    let message;
    let birthday = [];
    //Checar se tem aniversariante hoje
    database[checkvalue.tables].forEach((element) => {
      if (checkvalue.column === "dataNascimento") {
        const monthAndDayFromBirthday = element[
          checkvalue.column
        ].toLocaleDateString("en-us", {
          day: "numeric",
          month: "numeric",
          timeZone: "GMT+0",
        });
        if (monthAndDayFromBirthday == dateTodayInString) {
          birthday.push(element[checkvalue.addon[0]]);
          checkToSendEmail = true;
        } else if (checkToSendEmail) {
        }
        message = `Olá, este é um e-mail de testes! Isso significa que estamos testando o e-mail, logo verificamos que ${
          checkvalue.type === "daily" ? "hoje" : "este mês"
        } possuem ${
          birthday.length
        } aniversariante(s) que é(são): ${birthday} ${new Date()}`;
      }
    });
    //

    if (checkToSendEmail) {
      console.log(message);
      // sendEmail(message);
      checkToSendEmail = false;
    }
  },
};

//APLICAR SWITCH PARA VERIFICAÇÃO DO TIPO (DIARIO,SEMANAL,MENSAL)
// const testeMinuto = 2;
// var teste = new CronJob(
//   `*/${testeMinuto} * * * * *`,
//   function () {
//     Alerts[jsonFrontEnd.tables](jsonFrontEnd);
//   },
//   null,
//   true,
//   "UTC-1"
// );

Alerts[jsonFrontEnd.tables](jsonFrontEnd);
