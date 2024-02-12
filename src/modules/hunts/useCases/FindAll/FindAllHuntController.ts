import { Request, Response } from "express";
import { FindAllHuntUseCase } from "./FindAllHuntUseCase";

export class FindAllHuntController {
  async handle(request: Request, response: Response) {
    const { id_character } = request.body;

    const findAllHuntUseCase = new FindAllHuntUseCase();
    const result = await findAllHuntUseCase.execute({
      id_character
    });

    return response.json(result);
  }
}