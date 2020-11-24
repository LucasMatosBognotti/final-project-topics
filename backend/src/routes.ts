import { Router } from 'express';

import ViagemController from './controllers/ViagemController';
import ClienteController from './controllers/ClienteController';

const routes = Router();

routes.post('/viagem', ViagemController.create);
routes.get('/viagem', ViagemController.index);
routes.put('/viagem/:id', ViagemController.update);
routes.delete('/viagem/:id', ViagemController.delete);

routes.post('/cliente', ClienteController.create);
routes.get('/cliente', ClienteController.index);

export default routes;
