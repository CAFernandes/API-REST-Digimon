import { Router } from 'express';
import Level from '../../controllers/Level';
import verifyToken from '../../services/validToken';
const level = new Level;

const routes = Router();

routes.get('/level', verifyToken, level.index);
routes.post('/level', verifyToken, level.insert);
routes.put('/level', verifyToken, level.upadte);
routes.delete('/level', verifyToken, level.delete);

routes.get('/level/:leveling', verifyToken, level.show);

export default routes;

