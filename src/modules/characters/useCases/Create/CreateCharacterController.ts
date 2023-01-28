import { Request, Response } from "express";
import { CreateCharacterUseCase } from "./CreateCharacterUseCase";

export class CreateCharacterController {
  async handle(request: Request, response: Response) {
    const { name, id_archetype } = request.body;

    const createCharacterUseCase = new CreateCharacterUseCase();
    const result = await createCharacterUseCase.execute({
      name,
      id_archetype
    });

    return response.json(result);
  }
}