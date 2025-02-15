const express = require("express");

const { ServerConfig, Logger } = require("./config");

const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
	console.log(`Server is running on port ${ServerConfig.PORT}`);
	// Logger.info("Server started");
	console.log("2022-01-17 04:33:12" - "2022-01-17 14:33:12");
});
