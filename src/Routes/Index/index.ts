import { Router } from 'express';
import Index from '../../controllers/Index';
import JWTs from '../../models/JWT';
import verifyToken from '../../services/validToken';
const index = new Index;
const jwts = new JWTs;

const routes = Router();

routes.get('/', verifyToken, index.index);
routes.get('/token', jwts.index);

export default routes;

