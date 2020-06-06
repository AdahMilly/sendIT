const path = require("path");

modules.export = {
	development: {
		client: "pg",
		connection: `postgres://${username}:${password}@${host}/${name}`,
		migrations: {
			directory: __dirname + "/db/migrtions",
		},
		seeds: {
			directory: __dirname + "/db/seeds",
		},
	},
	production: {
		client: "pg",
		connection: "process.env.DATABASE_URL",
		migrations: {
			directory: __dirname + "/db/migrtions",
		},
		seeds: {
			directory: __dirname + "/db/seeds",
		},
	},
};
