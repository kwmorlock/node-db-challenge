
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed')
        .defaultTo(false);
    })

    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.integer('resource_id')
        .unsigned() 
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE');
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.string('task_name', 128)
        .unique()
        .notNullable();
        tbl.string('description', 128);
        tbl.string('notes', 128);
        tbl.boolean('in_use')
        .defaultTo(false);
    })
};

exports.down = function(knex) {
  
};
