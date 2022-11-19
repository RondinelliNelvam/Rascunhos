const array = ["Primeiro", "Segundo", "Terceiro"];
const array2 = ["Quarto", "Quinto"];
//method = 1 => push(), method = 2 => unshift()
method = 3;

if (method == 1) {
  const arraylength = array.push("Quarto", "Quinto");

  console.log(array);
  console.log(arraylength);
} else if (method == 2) {
  const arraylength = array.unshift("Quarto", "Quinto");

  console.log(array);
  console.log(arraylength);
} else if (method == 3) {
  const array3 = array.concat(array2);

  console.log(array);
  console.log(array2);
  console.log(array3);
  const array4 = [].concat(array);
  console.log(array4);
}
let [a, b, ...args] = [1, 2, 3, 4, 5];
console.log(args);
