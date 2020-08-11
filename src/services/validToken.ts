import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers['authorization']
  if (bearerHeader !== undefined) {
    const token = bearerHeader.replace(/(\w+\s)/, '')
    const decode = jwt.decode(token)
    let key = ''
    if (typeof decode === 'object' && decode !== null) {
      const now = Math.floor(Date.now() / 1000)
      const exp = Math.floor(decode.iat) + (1440 * 120)
      if (now > exp) {
        return res.status(401).json({ status: false, message: 'Token expired' })
      }
      key = decode.user
    }
    else key = 'invalid';
    jwt.verify(token, key, { algorithms: ['HS256'] }, (err) => {
      if (err) {
        return res.status(401).json({ status: false, message: err.message })
      } else {
        next()
      }
    })
  } else {
    return res.status(403).json({ status: false, message: 'Invalid token access' })
  }
}