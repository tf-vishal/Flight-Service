const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane } = require("../models");

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
					as: "departure_airport", // Specify the alias for the departure airport
					attributes: ["id", "name", "code"],
				},
				{
					model: Airport,
					as: "arrival_airport", // Specify the alias for the arrival airport
					attributes: ["id", "name", "code"],
				},
				{
					model: Airplane,
					as: "airplane_details",
					required: true,
				},
			],
		});
		return flights;
	}
}

module.exports = FlightRepository;
