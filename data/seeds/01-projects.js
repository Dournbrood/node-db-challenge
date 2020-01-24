exports.seed = function (knex) {
  return knex('project').insert([
    { name: "Node DB Challenge!" },
    { name: "Description challenge!", description: "Moo moo mOOOOooOOoo" },
    { name: "Already done.", description: "Don't worry, we took care of it for you.", completed: true }
  ])
};