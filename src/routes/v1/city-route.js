const express = require("express");

const { CityController } = require("../../controllers");

const { cityMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
	"/",
	cityMiddlewares.validateCreateRequest,
	CityController.createCity
);

router.get("/", CityController.getCities);

router.get("/:id", CityController.getCity);

module.exports = router;
