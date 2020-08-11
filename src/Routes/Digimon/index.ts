import { Router } from 'express';
import Digimon from '../../controllers/Digimons';
import verifyToken from '../../services/validToken';

const digimon = new Digimon;
const routes = Router();

routes.get('/digimon', verifyToken, digimon.index);
routes.put('/digimon/', verifyToken, digimon.update);
routes.post('/digimon', verifyToken, digimon.insert);
routes.delete('/digimon', verifyToken, digimon.delete);

routes.get('/digimon/:id', verifyToken, digimon.show);
routes.get('/digimon/search/:name', verifyToken, digimon.find);

export default routes;