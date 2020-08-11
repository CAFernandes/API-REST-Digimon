import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('signture', table => {
    table.increments('id').primary();
    table.string('key').notNullable().unique();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('signture');
}