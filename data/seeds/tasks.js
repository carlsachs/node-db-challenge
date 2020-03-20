
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, projects_id: 1, description: "task 1 description", notes: "These are the notes for task 1", completed: false},
        {id: 2, projects_id: 2, description: "task 2 description", notes: "These are the notes for task 2", completed: false},
        {id: 3, projects_id: 3, description: "task 3 description", notes: "These are the notes for task 2", completed: false}
      ]);
    });
};
