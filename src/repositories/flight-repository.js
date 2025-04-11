const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane } = require("../models");
const db = require("../models");
const { rowLockQueryOnFlights } = require("./queries");
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

	async updateRemainningSeats(flightId, seats, dec = true) {
		await db.sequelize.query(rowLockQueryOnFlights(flightId));
		const flight = await Flight.findByPk(flightId);
		if (parseInt(dec) || dec == true) {
			const response = await flight.decrement("totalSeats", { by: seats });
			return response;
		} else {
			const response = await flight.increment("totalSeats", { by: seats });
			return response;
		}
	}
}

module.exports = FlightRepository;
