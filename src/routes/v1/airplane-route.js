const express = require("express");

const { AirplaneController } = require("../../controllers");

const { airplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
	"/",
	airplaneMiddlewares.validateCreateRequest,
	AirplaneController.createAirplane
);
router.get("/", AirplaneController.getAirplanes);

router.get("/:id", AirplaneController.getAirplane);

router.delete("/:id", AirplaneController.destroyAirplane);

router.patch(
	"/:id",
	airplaneMiddlewares.validateCreateRequest,
	AirplaneController.updateAirplane
);

module.exports = router;
