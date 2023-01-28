import { Request, Response } from "express";
import { DeleteCharacterUseCase } from "./DeleteCharacterUseCase";

export class DeleteCharacterController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteCharacterUseCase = new DeleteCharacterUseCase();
    const result = await deleteCharacterUseCase.execute({
      id
    });

    return response.json(result);
  }
}