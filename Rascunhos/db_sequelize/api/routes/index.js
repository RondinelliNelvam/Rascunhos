const bodyParser = require("body-parser");
const tests = require("./tests");

module.exports = (route) => {
  route.use(bodyParser.json(), tests);
};
