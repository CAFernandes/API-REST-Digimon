import knex from '../database/Connection';
import Digimon from '../models/Digimon';

const digi = new Digimon;

class Level {
  async index() {
    const levels = await knex('level').select('*').orderBy('id');
    return levels;
  }
  async show(id: Number) {
    const max_level = await knex('level').select('id').limit(1).orderBy('id', 'desc')
    if (id > max_level[0].id || id < 1) {
      return { status: false, message: `Not found this level: ${id}` }
    }
    const levels = await digi.getDigimonsByLevel(id)
    let digimons = Array();
    for await (const digimon of levels) {
      const digievoltuions = await digi.getDigievolutions(digimon.id)
      const degeevolutions = await digi.getDegeevolutions(digimon.id);
      digimons.push({ ...digimon, digievoltuions, degeevolutions })
    }
    return {
      status: true,
      message: `Find a total of ${digimons.length} digimons`,
      digimons
    };
  }
  async insert(title: String) {
    const trx = await knex.transaction();
    try {
      const id = await trx('level').insert({ title });
      await trx.commit();
      return { status: true, message: `Level inserted in ID: ${id[0]}, of success` }
    } catch (e) {
      await trx.rollback();
      console.log(e)
      return { status: false, message: e.sqlMessage }
    }
  }
  async update(title: String, id: Number) {
    const trx = await knex.transaction();
    try {
      await trx('level').where('id', '=', id).update('title', title)
      await trx.commit();
      return { status: true, message: 'Level updated' }
    } catch (e) {
      await trx.rollback();
      console.log(e)
      return { status: false, message: e.sqlMessage }
    }
  }
  async delete(id: Number) {
    try {
      const deleted = await knex('level').where('id', '=', id).del()
      return { status: true, message: `Level at id: ${id}, success deleted`, deleted }
    } catch (error) {
      console.log(error)
      return { status: false, message: error.sqlMessage, error }
    }
  }
}

export default Level