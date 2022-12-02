array1 = [
  {
    id: 1,
    nome: "array de teste",
    valor01: true,
    valor02: false,
    valor03: false,
    valor04: true,
    valor05: false,
  },
  {
    id: 2,
    nome: "objetos de teste",
    valor01: false,
    valor02: true,
    valor03: false,
    valor04: true,
    valor05: true,
  },
];

arrayNomes = ["valor01", "valor02", "valor03", "valor04", "valor05"];

for (let i = 0; i < arrayNomes.length; i++) {
  console.log(array1[0][arrayNomes[i]]);
  if (array1[0][arrayNomes[i]] === false) {
  }
}
