import { Request, Response } from "express";
import { UpdateCharacterUseCase } from "./UpdateCharacterUseCase";

export class UpdateCharacterController {
  async handle(request: Request, response: Response) {
    const { id, level, attributes } = request.body;

    const updateCharacterUseCase = new UpdateCharacterUseCase();
    const result = await updateCharacterUseCase.execute({
      id,
      level,
      attributes
    });

    return response.json(result);
  }
}