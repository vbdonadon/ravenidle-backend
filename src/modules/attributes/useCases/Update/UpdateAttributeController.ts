import { Request, Response } from "express";
import { UpdateAttributeUseCase } from "./UpdateAttributeUseCase";

export class UpdateAttributeController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const updateAttributeUseCase = new UpdateAttributeUseCase();
    const result = await updateAttributeUseCase.execute({
      name
    });

    return response.json(result); 
  }
}