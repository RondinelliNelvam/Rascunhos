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
let newArrayTwo = [];
let array3 = [
  [{ teste: [1, 2] }, { teste3: [2, 3] }, { teste2: [3, 4] }],
  [{ teste: [2, 3] }, { teste3: [3, 4] }, { teste2: [4, 5] }],
  [{ teste: [3, 4] }, { teste3: [4, 5] }, { teste2: [5, 6] }],
  [{ teste: [4, 5] }, { teste3: [5, 6] }, { teste2: [1, 2] }],
];
for (let i = 0, j = 1; j < array3.length; i++, j++) {
  for (let a = 0; a < array3[i].length; a++) {
    if (i === 0) {
      newArrayTwo.push([array3[i][a]]);
      console.log(newArrayTwo);
    } else {
      // newArrayTwo[a].push(Object.values(array3[i][a]));
    }
  }
}
array3[0][0][Object.keys(array3[0][0])[0]];
console.log(array3[0][0]);

//ISSO É UM OBJETO
