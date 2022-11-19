let array = [1, 2, 3, 4, 5, 6];
let total = array.reduce((acumulador, currentValue, index) => {
  console.log(`${acumulador}+${currentValue}`, index);
  return acumulador + currentValue;
}, 0);

console.log(total, array);
