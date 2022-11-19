const a = [1, 2, 3, 4, 5];
let b = ["Arnold", "Christian", "Bauducco", "Algo", "Esqueci"];
const c = [
  {
    key: "algo",
    teste: "algo2",
  },
  {
    key: "algo3",
    teste: "algo4",
  },
  { key: "algo4", teste: "algo5" },
];
let d = {
  valor: 5,
};
// d.valor += a[1];

// e = a.map((x) => x * x);
// f = a.map((x) => x * x).reduce((total, value) => total + value);
a.forEach((x) => console.log((a[x] += x)));
