import knex from '../database/Connection';

interface DigimonInterface {
  "name": string,
  "level": number,
  "digievolutions": { after: number }[]
  "degievolutions": { before: number }[]
}

class Digimon {
  async getAllDigimon() {
    const digimons = await knex('digimon')
      .select('digimon.id', 'digimon.name', 'level.title')
      .join('level', 'digimon.level', '=', 'level.id')
      .orderBy('digimon.id');
    return digimons.map(digimon => ({ ...digimon, image: `${process.env.URL_APP}${process.env.PORT}/images/${digimon.name}.jpg` }))
  }
  async getDigimonByID(id: Number) {
    try {
      const digimon = await knex('digimon')
        .select('digimon.id', 'digimon.name', 'level.title')
        .join('level', 'digimon.level', '=', 'level.id')
        .where('digimon.id', '=', id)
        .orderBy('digimon.id');
      return {
        status: true,
        digimon: { ...digimon[0], image: `${process.env.URL_APP}/images/${digimon[0].name}.jpg` }
      }
    } catch (error) {
      return { status: false, message: 'Digimon not found in database' }
    }
  }
  async getDigimonsByName(name: String) {
    const digimons = await knex('digimon')
      .select('digimon.id', 'digimon.name', 'level.title')
      .join('level', 'level.id', '=', 'digimon.level')
      .where('digimon.name', 'like', `%${name}%`)
      .orderBy('digimon.id');
    return digimons.map(digimon => ({ ...digimon, image: `${process.env.URL_APP}/images/${digimon.name}.jpg` }))
  }
  async getDigimonsByLevel(level: Number) {
    const digimons = await knex('digimon')
      .where('digimon.level', '=', level)
      .join('level', 'digimon.level', '=', 'level.id')
      .select('digimon.id', 'digimon.name', 'level.title')
      .orderBy('digimon.id')
    return digimons.map(digimon => ({ ...digimon, image: `${process.env.URL_APP}/images/${digimon.name}.jpg` }))
  }
  async getDigievolutions(id: Number) {
    return await knex('digievolutions')
      .select('digimon.id', 'digimon.name', 'level.title AS level')
      .join('digimon', 'digimon.id', '=', 'digievolutions.after')
      .join('level', 'digimon.level', '=', 'level.id')
      .where('digievolutions.digimon', '=', id);
  }
  async getDegeevolutions(id: Number) {
    return await knex('digievolutions')
      .select('digimon.id', 'digimon.name', 'level.title AS level')
      .join('digimon', 'digimon.id', '=', 'digievolutions.digimon')
      .join('level', 'digimon.level', '=', 'level.id')
      .where('digievolutions.after', '=', id);
  }
  async insert(digimon: DigimonInterface) {
    const { name, level, digievolutions, degievolutions } = digimon;
    const trx = await knex.transaction();
    try {
      const id = await trx('digimon').insert({ name, level })
      for await (const digievolution of digievolutions) {
        await trx('digievolutions').insert({ digimon: id[0], after: digievolution.after })
      }
      for await (const degievolution of degievolutions) {
        await trx('digievolutions').insert({ digimon: degievolution.before, after: id[0] })
      }
      await trx.commit();
      return { status: true, digimon: id[0] }
    } catch (error) {
      await trx.rollback();
      return { status: false, error }
    }
  }
  async update(digimon: DigimonInterface, id: Number) {
    const { name, level, digievolutions, degievolutions } = digimon;
    const trx = await knex.transaction();
    try {
      await trx('digimon').where('id', '=', id).update({ name, level })
      for await (const digievolution of digievolutions) {
        await trx('digievolutions').insert({ digimon: id, after: digievolution.after })
      }
      for await (const degievolution of degievolutions) {
        await trx('digievolutions').insert({ digimon: degievolution.before, after: id })
      }
      await trx.commit();
      return { status: true, digimon: id }
    } catch (error) {
      await trx.rollback();
      return { status: false, error }
    }
  }
  async delete(id: Number) {
    try {
      const deleted = await knex('digimon').where('id', '=', id).del()
      return { status: true, message: `Digimon at id: ${id}, success deleted`, deleted }
    } catch (error) {
      console.log(error)
      return { status: false, message: error.sqlMessage }
    }
  }
}

export default Digimon;