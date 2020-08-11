import { Request, Response } from 'express';
import Digimon from '../models/Digimon';
const digi = new Digimon;

class Digimons {
  async index(req: Request, res: Response) {
    const digimons = await digi.getAllDigimon()
    if (digimons.length === 0) {
      return res.status(404).json({ status: false, message: 'Not found digimons in database' })
    } else {
      return res.status(200).json({ status: true, message: 'Digimon(s) find(s)', founds: digimons.length, digimons })
    }
  }
  async show(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(406).json({ status: false, message: 'Not a number id' })
    }

    const selected = await digi.getDigimonByID(Number(id))
    if (selected.status) {
      const digievoltuions = await digi.getDigievolutions(Number(id))
      const degeevolutions = await digi.getDegeevolutions(Number(id))

      return res.status(200).json({
        status: true, message: 'Digimon find',
        digimon: { ...selected.digimon, digievoltuions, degeevolutions }
      });
    } else {
      return res.status(404).json(selected);
    }
  }
  async find(req: Request, res: Response) {
    const { name } = req.params;
    const banco = await digi.getDigimonsByName(String(name));
    let digimons = Array();
    for await (const digimon of banco) {
      const digievoltuions = await digi.getDigievolutions(digimon.id)
      const degeevolutions = await digi.getDegeevolutions(digimon.id);
      digimons.push({ ...digimon, digievoltuions, degeevolutions })
    }
    if (digimons.length > 0) {
      return res.status(200).json({
        status: true, message: 'Digimon(s) find(s)',
        founds: digimons.length,
        digimons
      });
    } else {
      return res.status(202).json({
        status: false, message: 'No results',
        founds: digimons.length,
        digimons
      });
    }
  }
  async insert(req: Request, res: Response) {
    const { status, digimon, error } = await digi.insert(req.body);
    if (status) {
      return res.status(201).json({
        status,
        message: 'Digimon inserido com sucess',
        id: digimon
      })
    } else {
      return res.status(500).json({
        status,
        message: 'Houve erro ao inserir o digimon',
        error
      })
    }
  }
  async update(req: Request, res: Response) {
    const { digimon, id } = req.body;
    const updated = await digi.update(digimon, id)
    if (updated.status) {
      res.status(201).json(updated);
    } else {
      res.status(400).json(updated);
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    const deleted = await digi.delete(id);
    if (deleted.status) {
      res.status(200).json(deleted)
    } else {
      res.status(500).json(deleted)
    }
  }
}

export default Digimons;