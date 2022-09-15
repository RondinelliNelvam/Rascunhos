const a = [1, 2, 3, 4, 5],
  b = [6, 7, 8, 9, 10];
var ab = a.reduce(
  (acumulador, elemento) => (acumulador += elemento),
  b.reduce((acumulador, elemento) => (acumulador += elemento), 0)
);
console.log(ab);
