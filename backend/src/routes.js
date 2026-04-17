const express = require("express");
const router = express.Router();

const PersonController = require("./controllers/PersonController");

router.post("/persons", PersonController.createPerson);

module.exports = router;
