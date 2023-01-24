import { Request, Response } from "express";
import { UpdateArchetypeUseCase } from "./UpdateArchetypeUseCase";

export class UpdateArchetypeController {
  async handle(request: Request, response: Response) {
    const { id, id_archetype, id_character_archetype } = request.body;

    const updateArchetypeUseCase = new UpdateArchetypeUseCase();
    const result = await updateArchetypeUseCase.execute({
      id,
      id_archetype
    });

    return response.json(result);
  }
}