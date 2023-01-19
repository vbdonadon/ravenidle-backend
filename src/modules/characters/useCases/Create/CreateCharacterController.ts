import { Request, Response } from "express";
import { CreateCharacterUseCase } from "./CreateCharacterUseCase";

export class CreateCharacterController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createCharacterUseCase = new CreateCharacterUseCase();
    const result = await createCharacterUseCase.execute({
      name
    });

    return response.json(result);
  }
}