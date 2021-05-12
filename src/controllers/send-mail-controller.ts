import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SurveryRepository from "../repositories/survery-repositories";
import SurverysUsersRepository from "../repositories/surverys-users-repositories";
import UserRepository from "../repositories/user-repositories";

class SendMailController {
  async execute(req: Request, res: Response) {
    const { email, survery_id } = req.body;

    const usersRepository = getCustomRepository(UserRepository);
    const surverysRepository = getCustomRepository(SurveryRepository);
    const surverysUsersRepository = getCustomRepository(SurverysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });
    const surveryAlreadyExists = await surverysRepository.findOne({ id: survery_id });

    if (!userAlreadyExists) {
      return res.status(400).json({
        error: 'User does not exists'
      });
    }

    if (!surveryAlreadyExists) {
      return res.status(400).json({
        error: 'Survery does not exists'
      });
    }

    // Save data user to "SurverysUsers" table
    const surveryUser = surverysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survery_id
    });

    await surverysUsersRepository.save(surveryUser)

    //  Send Email to user

    return res.json(surveryUser);
  }
}

export default SendMailController;
