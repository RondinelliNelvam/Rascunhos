var moment = require("moment");

let dtInicio = new Date("2022-12-02T10:55:36.277Z");
let dtFim = new Date("2022-12-02T11:00:36.277Z");

console.log(dtFim - dtInicio);
console.log(dtInicio);
console.log(
  dtInicio.getDay(),
  dtInicio.getDate(),
  dtInicio.getMonth(),
  dtInicio.getFullYear()
);

// let dtInicio = "2022-12-02T10:55:36.277Z";

// let dtFim = "2022-12-02T11:00:36.277Z";
// console.log(moment(dtInicio));
// let a = moment("2016-01-01");
// console.log(a);

// const aDateInstance = new Date();
// const millisecondsSince1970 = aDateInstance.getTime();
// const milliseconds = Date.now();
// const milliseconds2 = +new Date();

// console.log(aDateInstance);
// console.log(millisecondsSince1970);
// console.log(milliseconds);
// console.log(milliseconds2);
// const myBirthday = new Date("1987-07-22");
// const rightNow = new Date();

// const numberOfMsIHaveLived = rightNow - myBirthday;

// console.log("-", myBirthday, rightNow, numberOfMsIHaveLived);

// const myBirthday2 = new Date("1987-07-22");
// const myPartnersBirthday = new Date("1988-06-08");

// const together = myBirthday + myPartnersBirthday;
// console.log(myBirthday2, myPartnersBirthday, together);

// http://localhost:3082/torres/1?dtInicio=2022-12-02T10:55:36.277Z&dtFim=2022-12-02T11:00:36.277Z
