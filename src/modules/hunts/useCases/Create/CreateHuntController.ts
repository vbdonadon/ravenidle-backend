import { Request, Response } from "express";
import { CreateHuntUseCase } from "./CreateHuntUseCase";

export class CreateHuntController {
  async handle(request: Request, response: Response) {
    const { id_character, id_monster } = request.body;

    const createHuntUseCase = new CreateHuntUseCase();
    const result = await createHuntUseCase.execute({
      id_character,
      id_monster
    });

    return response.json(result);
  }
}