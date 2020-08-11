import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('digimon', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('level')
      .notNullable()
      .references('level')
      .onDelete('CASCADE') // if referenced Level is deleted, delete this Comment.
    table.index(['name'], 'Search by Name');
    table.index(['level'], 'Search by Level');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('digimon');
}