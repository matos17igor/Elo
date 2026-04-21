const express = require("express");
const router = express.Router();

const PersonController = require("./controllers/PersonController");
const UserController = require("./controllers/UserController");
const LocationController = require("./controllers/LocationController");
const AuthController = require("./controllers/AuthController");

const authMiddleware = require("./middlewares/auth");

router.get("/persons", PersonController.getAll);
router.get("/persons/:id", PersonController.getPersonById);

router.post("/login", AuthController.login);
router.post("/users", UserController.createUser);
router.get("/users", UserController.getAllUsers);

router.get("/locations", LocationController.getAllLocations);

// Rotas protegidas
router.post("/persons", authMiddleware, PersonController.createPerson);
router.patch("/persons/:id", authMiddleware, PersonController.updateStatus);
router.delete("/persons/:id", authMiddleware, PersonController.deletePerson);
router.post("/locations", authMiddleware, LocationController.createLocation);

module.exports = router;
