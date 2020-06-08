exports.up = function (knex) {
	return knex.schema.craeteTable("USERS_TABLE", function (table) {
		table.increments("id").primary();
		table.string("name").notNull();
		table.string("email").notNull();
		table.string("password").notNull();
        table.string("phone").notNull();
        table.timestamps("created_at").defaultTo(knex.fn.now());
        table.timestamps("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex, promise) {
	return knex.schema.droptable(USERS_TABLE);
};
