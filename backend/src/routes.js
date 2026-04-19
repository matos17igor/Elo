const express = require("express");
const router = express.Router();

const PersonController = require("./controllers/PersonController");
const UserController = require("./controllers/UserController");
const LocationController = require("./controllers/LocationController");

router.post("/persons", PersonController.createPerson);
router.get("/persons", PersonController.getAll);
router.get("/persons/:id", PersonController.getPersonById);
// Patch permite editar apenas um campo, Put edita tudo
router.patch("/persons/:id", PersonController.updateStatus);

router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUsers);

router.post("/locations", LocationController.createLocation);
router.get("/locations", LocationController.getAllLocations);

module.exports = router;
