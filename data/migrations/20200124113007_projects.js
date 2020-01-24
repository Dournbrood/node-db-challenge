exports.up = function (knex) {
    return knex.schema
        .createTable("project", table => {
            table.increments();

            table.string("name")
                .notNullable()
                .index();

            table.string("description");

            table.boolean("completed")
                .defaultTo(false);
        })
        .createTable("resource", table => {
            table.increments();

            table.string("name")
                .notNullable()
                .index();

            table.string("description");
        })
        .createTable("task", table => {
            table.increments();

            table.string("description")
                .notNullable()
                .index();

            table.string("notes");

            table.boolean("completed")
                .defaultTo(false)

            table.integer("project_id")
                .notNullable()
                .references("id")
                .inTable("project")
                .onDelete("CASCADE") // So knex-cleaner doesn't flip out.
                .onUpdate("CASCADE")
        })
        .createTable("project_resource", table => {
            table.increments()

            table.integer("project_id")
                .notNullable()
                .references("id")
                .inTable("project")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")

            table.integer("resource_id")
                .notNullable()
                .references("id")
                .inTable("resource")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project_resource")
        .dropTableIfExists("task")
        .dropTableIfExists("resource")
        .dropTableIfExists("project");
};