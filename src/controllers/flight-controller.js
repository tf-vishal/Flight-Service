const { FlightService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const { errorResponse, successResponse } = require("../utils/common");

async function createFlight(req, res) {
	try {
		// console.log(req.body);
		const flight = await FlightService.createFlight({
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			departureTime: req.body.departureTime,
			arrivalTime: req.body.arrivalTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
		});
		successResponse.message = "Successfully created flight";
		successResponse.data = flight;
		return res.status(StatusCodes.CREATED).json(successResponse);
	} catch (error) {
		errorResponse.error = error;
		errorResponse.message = "Something went wrong while creating flight";
		// console.log(error);
		return res.status(error.statusCode).json(errorResponse);
	}
}

module.exports = {
	createFlight,
};
