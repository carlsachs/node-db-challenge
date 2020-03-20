
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl.varchar('name', 100).notNullable()

        tbl.text('description', 250)
        
        tbl.boolean('Completed', false)
    })
    .createTable('resources', tbl => {
        tbl.increments()

        tbl.varchar('name', 50).notNullable()

        tbl.text('description', 250)
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.text("description", 250)

        tbl.text("notes", 250)

        tbl.boolean("completed", false)
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};