const USERS_TABLE = "users";

exports.up = function (knex) {
	return knex.schema.createTable("PARCELS_TABLE", function (table) {
		table.increments("id").primary();
		table
			.integer("user_id")
			.references("id")
			.inTable(USERS_TABLE)
			.notNull();

		table.string("sender_name").notNull();
		table.string("receiver_name").notNull();
		table.string("pickup_location").notNull();
		table.string("destination").notNull();
		table.string("package_content").notNull();
		table.float("weight").notNull();
		table.float("price").notNull();
		table.timestamps("created_at").defaultTo(knex.fn.now());
		table.timestamps("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex, promise) {
	return knex.schema.dropTable("PARCELS_TABLE");
};
