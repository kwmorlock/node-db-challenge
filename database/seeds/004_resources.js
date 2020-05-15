exports.seed = function(knex) {
  return knex('resources').insert([
    {resources_name: 'ummm'},
    {resources_name: 'ok'},
    {resources_name: 'Alright'},
  ]);
};
