const { Router } = require("express");
const TestsControllers = require("../controllers/TestsControllers");

const router = Router();

router.get("/get", TestsControllers.getAll);

module.exports = router;
