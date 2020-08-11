import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('level', table => {
    table.increments('id').primary();
    table.string('title').notNullable().unique();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('level');
}