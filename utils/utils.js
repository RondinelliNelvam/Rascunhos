object1 = {
  a: "a",
  b: "b",
  c: "c",
};
object2 = {
  d: "d",
  e: "e",
  f: "f",
};
object3 = {
  g: "g",
  ext: {
    h: "h",
    f: "f",
  },
};
branchExample = [
  {
    id: 1,
    branchName: "Cidade1",
  },
  {
    id: 2,
    branchName: "Cidade2",
  },
  {
    id: 3,
    branchName: "Cidade3",
  },
  {
    id: 4,
    branchName: "Cidade4",
  },
];

jsonExampleInString =
  '{"name":"Person01","email":"person01@someEmail.com","type":"something", "array":[{"ar":"1"}, {"Cr":"2"}]}';

itemList = [
  {
    quantity: 10,
    itemId: 5,
  },
  {
    quantity: 5,
    itemId: 4,
  },
  {
    quantity: 5,
    itemId: 3,
  },
  {
    quantity: 10,
    itemId: 2,
  },
];

module.exports = {
  object1,
  object2,
  object3,
  branchExample,
  jsonExampleInString,
  itemList,
};
