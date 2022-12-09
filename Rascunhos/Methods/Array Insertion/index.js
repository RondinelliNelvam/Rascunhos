const array = ["Primeiro", "Segundo", "Terceiro"];
const array2 = ["Quarto", "Quinto"];
//method = 1 => push(), method = 2 => unshift()
method = 3;

if (method == 1) {
  const arraylength = array.push("Quarto", "Quinto");

  // console.log(array);
  // console.log(arraylength);
} else if (method == 2) {
  const arraylength = array.unshift("Quarto", "Quinto");

  // console.log(array);
  // console.log(arraylength);
} else if (method == 3) {
  const array3 = array.concat(array2);

  // console.log(array);
  // console.log(array2);
  // console.log(array3);
  const array4 = [].concat(array);
  // console.log(array4);
}
// let [a, b, ...args] = [1, 2, 3, 4, 5];
// console.log(args);
let arrayKey = ["teste", "teste3", "teste2"];
let newArrayTwo = [];
let array3 = [
  [{ teste: [1, 2] }, { teste3: [2, 3] }, { teste2: [3, 4] }],
  [{ teste: [2, 3] }, { teste3: [3, 4] }, { teste2: [4, 5] }],
  [{ teste: [3, 4] }, { teste3: [4, 5] }, { teste2: [5, 6] }],
  [{ teste: [4, 5] }, { teste3: [5, 6] }, { teste2: [1, 2] }],
];

newArrayTwo = array3[0].map((element) => element);

for (let i = 0, j = 1; j < array3.length; i++, j++) {
  for (let a = 0; a < newArrayTwo.length; a++) {
    newArrayTwo[a][Object.keys(newArrayTwo[a])[0]].push(
      ...array3[j][a][Object.keys(array3[j][a])[0]]
    );
  }
}
console.log(Object.keys(newArrayTwo[0]));
console.log(newArrayTwo);

volt_grd_in,
  amp_grd,
  power_grd,
  energy_grd,
  volt_pv01,
  amp_pv,
  watt_pv01,
  watt_total,
  volt_bar,
  soc,
  watt_b,
  energy_pv,
  volt_inv_out,
  amp_inv_out,
  watt_inv_out,
  sys_bat,
  amp_byp,
  temp,
  amp_b01,
  amp_b,
  status,
  dps1,
  dps2,
  dps3,
  fc,
  dj14,
  dj15,
  false,
  dj3,
  autonomy;

1, 1, 1, 1, 1;
