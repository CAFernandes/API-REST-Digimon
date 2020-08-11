import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('digievolutions', table => {
    table.increments('id').primary();
    table.integer('digimon')
      .notNullable()
      .references('digimon')
      .onDelete('CASCADE') // if referenced Digimon is deleted, delete this Comment
    table.integer('after')
      .nullable()
      .references('digimon')
      .onDelete('CASCADE') // if referenced Digimon is deleted, delete this Comment
    table.unique(['digimon', 'after'])
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('digievolutions');
}


/******** Digi-Evolution **********
* (id)            INTEGER PRIMARY *
* (digimon)       INTERGER        *
* (digievolution) INTERGER        *
**********************************/