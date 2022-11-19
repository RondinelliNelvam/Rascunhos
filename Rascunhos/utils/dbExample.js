dbExample = [
  {
    id: 1,
    itemName: "Item Um",
    allHistoric: [
      {
        id: 8,
        quantity: 5,
        type: "Saida",
        branchId: 1,
        itemId: 1,
      },
      {
        id: 7,
        quantity: 5,
        type: "Saida",
        branchId: 1,
        itemId: 1,
      },
      {
        id: 6,
        quantity: 15,
        type: "Entrada",
        branchId: 1,
        itemId: 1,
      },
      {
        id: 3,
        quantity: 10,
        type: "Entrada",
        branchId: 2,
        itemId: 1,
      },
      {
        id: 1,
        quantity: 10,
        type: "Entrada",
        branchId: 2,
        itemId: 1,
      },
    ],
  },
  {
    id: 2,
    itemName: "Item Dois",
    allHistoric: [
      {
        id: 5,
        quantity: 10,
        type: "Entrada",
        branchId: 4,
        itemId: 2,
      },
      {
        id: 4,
        quantity: 10,
        type: "Entrada",
        branchId: 1,
        itemId: 2,
      },
      {
        id: 2,
        quantity: 10,
        type: "Entrada",
        branchId: 2,
        itemId: 2,
      },
    ],
  },
  {
    id: 3,
    itemName: "Item Três",
    allHistoric: [],
  },
];

module.exports = { dbExample };
