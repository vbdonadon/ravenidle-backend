import { Request, Response } from "express";
import { UpdateCharacterUseCase } from "./UpdateCharacterUseCase";

export class UpdateCharacterController {
  async handle(request: Request, response: Response) {
    const { id, level, attributes, available_points } = request.body;

    const updateCharacterUseCase = new UpdateCharacterUseCase();
    const result = await updateCharacterUseCase.execute({
      id,
      level,
      available_points,
      attributes
    });

    return response.json(result);
  }
}