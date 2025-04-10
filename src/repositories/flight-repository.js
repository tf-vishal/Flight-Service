const CrudRepository = require("./crud-repository");
const { Flight, Airport } = require("../models");

class FlightRepository extends CrudRepository {
	constructor() {
		super(Flight);
	}

	async getAllFlights(filter, sort) {
		const flights = await Flight.findAll({
			where: filter,
			order: sort,
			include: [
				{
					model: Airport,
					as: "departureAirport", // Specify the alias for the departure airport
					attributes: ["id", "name", "code"],
				},
				{
					model: Airport,
					as: "arrivalAirport", // Specify the alias for the arrival airport
					attributes: ["id", "name", "code"],
				},
			],
		});
		return flights;
	}
}

module.exports = FlightRepository;
