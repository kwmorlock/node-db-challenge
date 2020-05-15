
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
};

exports.down = function(knex) {
  
};
