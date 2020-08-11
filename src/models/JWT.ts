import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

class JWTs {
  async index(req: Request, res: Response) {
    const user = Math.random().toString();
    const playload = { user: user, iat: Math.floor(Date.now() / 1000) };
    const token = jwt.sign(playload, user, { algorithm: 'HS256', expiresIn: '1h' });
    return res.json({ token })
  }
}

export default JWTs