
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Project1', description: "test description", Completed: false},
        {id: 2, name: 'Project2', description: "test description 2", Completed: false},
        {id: 3, name: 'Project3', description: "test description 3", Completed: false}
      ]);
    });
};
