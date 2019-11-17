
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'john' },
    { username: 'jane' },
    { username: 'june' }
  ]);
};
