import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SurveryRepository from "../repositories/survery-repositories";

class SurveryController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    const surveryRepository = getCustomRepository(SurveryRepository);

    const survery = surveryRepository.create({
      title,
      description
    });

    await surveryRepository.save(survery);

    return res.status(201).json(survery);
  }

  async show(req: Request, res: Response) {
    const surveryRepository = getCustomRepository(SurveryRepository);

    const allSurverys = await surveryRepository.find();

    return res.json(allSurverys);
  }
};

export default SurveryController;
