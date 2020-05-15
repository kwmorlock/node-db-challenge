exports.seed = function(knex) {
  return knex('tasks').insert([
    {projects_id: 1, tasks_name: 'Wow', },
    {projects_id: 2,tasks_name: 'Great'},
    {projects_id: 3,tasks_name: 'Awesome'},
  ]);
};
