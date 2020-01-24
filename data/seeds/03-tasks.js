// exports.seed = function (knex) {
//   return knex('project').insert([
//     { name: "Node DB Challenge!" },
//     { name: "Description challenge!", description: "Moo moo mOOOOooOOoo" },
//     { name: "Already done.", description: "Don't worry, we took care of it for you.", completed: true }
//   ])
// };


exports.seed = function (knex) {
  return knex('task').insert([
    { description: "Start your Sprint challenge at 11 AM your time...?", project_id: 1, completed: true },
    { description: "Add the task seed to the Node DB Challenge", notes: "Metacognition.", project_id: 1, completed: true },
    { description: "Profit??", project_id: 1 },
    { description: "Add a description. ...?", project_id: 2 },
    { description: "We got it~", notes: "Happiness and sunshine~", completed: true, project_id: 3 }
  ])
};