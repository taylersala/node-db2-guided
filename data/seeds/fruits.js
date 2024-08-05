/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {id: 1, fruits_name: 'apple', avg_weight_oz: 1.5, delicious: null, color: 'green' },
    {id: 2, fruits_name: 'orange', avg_weight_oz: 2.5, delicious: true, color: 'red'},
    {id: 3, fruits_name: 'pear', avg_weight_oz: 3.5, delicious: 0, color: 'green'}
  ]);
};
