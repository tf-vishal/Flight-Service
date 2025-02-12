const { CityService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const { errorResponse, successResponse } = require("../utils/common");

async function createCity(req, res) {
	try {
		const city = await CityService.createCity({ name: req.body.name });
		successResponse.data = city;
		successResponse.message = "Created a city Successfully";
		return res.status(StatusCodes.CREATED).json(successResponse);
	} catch (error) {
		errorResponse.error = error;
		errorResponse.message = "Something went wrong while creating the city";
		return res.status(error.statusCode).json(errorResponse);
	}
}
module.exports = {
	createCity,
};
