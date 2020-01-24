exports.seed = function (knex) {
  return knex('resource').insert([
    { name: "Computer" },
    { name: "Nuclear War Cube", description: "A cube whose primary function is to be very radioactive." },
    { name: "Flicker Cloak", description: "Temporary invincibility?" },
    { name: "The Do-Nothing-Inator 9000", description: "The developer of this project." },
  ])
};