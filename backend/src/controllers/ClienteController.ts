import { Request, Response } from 'express';

import Cliente from '../models/Cliente';

class ClienteController {
  async create(req: Request, res: Response) {
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  }

  async index(req: Request, res: Response) {
    const clientes = await Cliente.find().populate('trips').exec();
  
    return res.json(clientes);
  }
}

export default new ClienteController();
