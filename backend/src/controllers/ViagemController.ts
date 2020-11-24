import { Request, Response } from 'express';

import Viagem from '../models/Viagem';

class ViagemController {
  async create(req: Request, res: Response) {
    const viagem = await Viagem.create(req.body);
    
    return res.json(viagem);
  }

  async index(req: Request, res: Response) {
    const viagens = await Viagem.find().populate('client').exec();

    return res.json(viagens);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const viagem = await Viagem.updateOne({ _id: id }, req.body);

    return res.json(viagem);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const viagem = await Viagem.deleteOne({ _id: id });

    return res.json(viagem);
  }
}

export default new ViagemController();
