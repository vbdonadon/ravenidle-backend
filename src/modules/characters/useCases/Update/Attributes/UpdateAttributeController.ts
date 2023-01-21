import { Request, Response } from "express";
import { UpdateAttributeUseCase } from "./UpdateAttributeUseCase";

export class UpdateAttributeController {
  async handle(request: Request, response: Response) {
    const { id, id_attribute, attribute_value } = request.body;

    const updateAttributeUseCase = new UpdateAttributeUseCase();
    const result = await updateAttributeUseCase.execute({
      id,
      id_attribute,
      attribute_value
    });

    return response.json(result);
  }
}