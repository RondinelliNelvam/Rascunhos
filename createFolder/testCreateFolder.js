const fs = require("fs");

const folderName = "../Users/maqui/test/vamosla";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true });
  }
} catch (err) {
  console.error(err);
}
