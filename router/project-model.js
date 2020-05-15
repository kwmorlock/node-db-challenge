const db = require('../db-config');

module.exports = {
    getProjectsById
};

function getProjectsById() {
    //  return db('projects')
    //  .select(
    //      'projects.projects_name',
    //      'tasks.notes',
    //      'tasks.tasks_description.',
    //      'tasks.completed'
    //  )
    //  .join('tasks', 'projects.id', 'projects.id')
    //  .where('projects.id', pId)

    return db('tasks as t')
    .join('projects as p', 't.projects_id', '=', 'p.id') 
    .select('p.projects_name', 'p.description', 't.projects_id', 't.tasks_name')

    // .from('projects as p', 'tasks as t')

    // .join('projects as p', 't.projects_id', '=', 'p.id') 


}

// select p.projects_name, p.description, t.projects_id, t.tasks_name
// from projects as p, tasks as t
// where t.projects_id = p.id