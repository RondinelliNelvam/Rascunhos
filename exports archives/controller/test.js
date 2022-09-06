require("dotenv").config();
const index = require("../config/index");
const { TESTE } = index[process.env.NODE_ENV];
// const { TESTE } = require(`../config/${process.env.NODE_ENV}`);

console.log(TESTE);
