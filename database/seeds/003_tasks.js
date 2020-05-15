exports.seed = function(knex) {
  return knex('tasks').insert([
    {tasks_name: 'Wow'},
    {tasks_name: 'Great'},
    {tasks_name: 'Awesome'},
  ]);
};
