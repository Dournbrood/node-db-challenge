// exports.seed = function (knex) {
//   return knex('project').insert([
//     { name: "Node DB Challenge!" },
//     { name: "Description challenge!", description: "Moo moo mOOOOooOOoo" },
//     { name: "Already done.", description: "Don't worry, we took care of it for you.", completed: true }
//   ])
// };

// exports.seed = function (knex) {
//   return knex('resource').insert([
//     { name: "Computer" },
//     { name: "Nuclear War Cube", description: "A cube whose primary function is to be very radioactive." },
//     { name: "Flicker Cloak", description: "Temporary invincibility?" },
//     { name: "The Do-Nothing-Inator 9000", description: "The developer of this project." },
//   ])
// };

exports.seed = function (knex) {
  return knex('project_resource').insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 3 },
    { project_id: 2, resource_id: 2 },
    { project_id: 2, resource_id: 1 },
    { project_id: 3, resource_id: 4 },
  ])
};