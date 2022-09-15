let testando = [
  {
    nome: "",
    animais: [
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
    ],
  },
];
Object.bind();
let test = { nome: "", valortotal: 0 };

// console.log(testando[0].animais);
testando[0].animais.reduce(
  (acumulator, currentValue, index) => {
    acumulator.teste += currentValue.idade;
    console.log(acumulator, "-", currentValue);
    //   console.log(test.valortotal, currentValue["idade"]);
    return acumulator;
  },
  { teste: 0 }
);
