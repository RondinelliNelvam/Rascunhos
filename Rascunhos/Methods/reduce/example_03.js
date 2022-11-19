animais = [
  {
    nome: "Fumaça",
    idade: 3,
    tipo: "cao",
  },
  {
    nome: "Tobby",
    idade: 6,
    tipo: "cao",
  },
  {
    nome: "Laminha",
    idade: 1,
    tipo: "gato",
  },
  {
    nome: "Nutella",
    idade: 3,
    tipo: "cao",
  },
];

dogsAgeSum = animais.filter((animal) => animal.tipo === "cao");
console.log(dogsAgeSum);

dogsAgeSum = animais.map((cao) => (cao.idade *= 7));
console.log(dogsAgeSum);

dogsAgeSum = animais.reduce((total, cao) => (total += cao.idade), 0);

console.log(dogsAgeSum);

dogsAgeSum = animais.reduce((total, elemento) => {
  if (elemento.tipo === "cao") return (total += elemento.idade *= 7);
  else return total;
}, 0);

console.log(dogsAgeSum);
