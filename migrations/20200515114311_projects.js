
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('projects_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed')
        .defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('tasks_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.string('notes', 128);
        tbl.boolean('completed')
        .defaultTo(false);
        tbl.integer('projects_id')
        .unsigned() 
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE');
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resources_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.boolean('in_use')
        .defaultTo(false);
    })
   
    .createTable('projects_resources', tbl => {
        tbl.increments();
        tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  
};
