
exports.seed = function(knex) {
  return knex('projects').insert([
    {projects_name: 'Build a hamburger'}, //1
    {projects_name: 'Learn to Code'}, //2
    {projects_name: 'Make Coffee'}, //3
  ]);
};