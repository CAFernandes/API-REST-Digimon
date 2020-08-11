import { Request, Response } from 'express';
import Level from '../models/Level';

const level = new Level;

class Levels {
  async index(req: Request, res: Response) {
    const levels = await level.index();
    return res.status(200).json(levels);
  }
  async show(req: Request, res: Response) {
    const { leveling } = req.params;
    const id = Number(leveling);
    if (isNaN(id)) {
      return res.status(406).json({ status: false, message: 'Not a number level' })
    }
    const digimons = await level.show(id)
    if (digimons.status) {
      return res.status(200).json(digimons);
    } else {
      return res.status(404).json(digimons);
    }
  }
  async insert(req: Request, res: Response) {
    const { title } = req.body;
    const inserted = await level.insert(title)
    if (inserted.status) {
      res.status(201).json(inserted);
    } else {
      res.status(400).json(inserted);
    }
  }
  async upadte(req: Request, res: Response) {
    const { title, id } = req.body;
    const updated = await level.update(title, id)
    if (updated.status) {
      res.status(201).json(updated);
    } else {
      res.status(400).json(updated);
    }
  }
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    const deleted = await level.delete(id);
    if (deleted.status) {
      res.status(200).json(deleted)
    } else {
      res.status(500).json(deleted)
    }
  }
}
export default Levels;