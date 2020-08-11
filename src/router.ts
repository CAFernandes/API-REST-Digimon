import { Router } from 'express';
import Digimon from './controllers/Digimons';
import Level from './controllers/Level';
import Index from './controllers/Index';
import JWTs from './models/JWT';
import verifyToken from './services/validToken';
const digimon = new Digimon;
const level = new Level;
const index = new Index;
const jwts = new JWTs;

const routes = Router();

routes.get('/', verifyToken, index.index);
routes.get('/token', jwts.index);
routes.get('/digimon', verifyToken, digimon.index);
routes.post('/digimon', verifyToken, digimon.insert);
routes.get('/digimon/:id', verifyToken, digimon.show);
routes.put('/digimon/:id', verifyToken, digimon.update);
routes.get('/digimon/search/:name', verifyToken, digimon.find);
routes.get('/level', verifyToken, level.index);
routes.post('/level', verifyToken, level.insert);
routes.put('/level', verifyToken, level.upadte);
routes.get('/level/:leveling', verifyToken, level.show);



export default routes;

