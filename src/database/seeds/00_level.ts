import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('level').insert([
    { title: 'Fresh' },
    { title: 'In-Training' },
    { title: 'Rookie' },
    { title: 'Champion' },
    { title: 'Ultimate' },
    { title: 'Mega' },
    { title: 'Armor' },
  ]);
}