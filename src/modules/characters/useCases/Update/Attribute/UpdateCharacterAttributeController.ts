import { Request, Response } from "express";
import { UpdateCharacterAttributeUseCase } from "./UpdateCharacterAttributeUseCase";

export class UpdateCharacterAttributeController {
  async handle(request: Request, response: Response) {
    const { id, attributes } = request.body;

    const updateCharacterAttributeUseCase = new UpdateCharacterAttributeUseCase();
    const result = await updateCharacterAttributeUseCase.execute({
      id,
      attributes
    });

    return response.json(result);
  }
}