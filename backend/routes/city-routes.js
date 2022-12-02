const express = require("express");
const router = express.Router();

const citiesController = require("../controllers/city-controller.js");
router.get("/", citiesController.getAllCities);
router.post("/", citiesController.addNewCity);
router.get("/:id", citiesController.getCityById);
router.put("/:id", citiesController.updateCity);
router.delete("/:id", citiesController.deleteCity);
router.get("/:cityName", citiesController.getCityByName);
module.exports = router;