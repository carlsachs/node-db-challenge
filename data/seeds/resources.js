
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: "Resource 1", description: "Resource 1 Description"},
        {id: 2, name: "Resource 2", description: "Resource 2 Description"},
        {id: 3, name: "Resource 3", description: "Resource 3 Description 3"}
      ]);
    });
};
