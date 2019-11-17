
exports.seed = function (knex) {
  return knex('table_name').insert([
    { username: 'john' },
    { username: 'jane' },
    { username: 'june' }
  ]);
};
