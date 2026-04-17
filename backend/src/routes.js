const express = require("express");
const router = express.Router();

const PersonController = require("./controllers/PersonController");

router.post("/persons", PersonController.createPerson);
router.get("/persons", PersonController.getAll);
router.get("/persons/:id", PersonController.getPersonById);

module.exports = router;
