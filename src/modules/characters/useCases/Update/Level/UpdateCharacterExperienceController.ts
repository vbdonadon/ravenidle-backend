import { Request, Response } from "express";
import { UpdateCharacterExperienceUseCase } from "./UpdateCharacterExperienceUseCase";

export class UpdateCharacterExperienceController {
  async handle(request: Request, response: Response) {
    const { id, experience } = request.body;

    const updateCharacterExperienceUseCase = new UpdateCharacterExperienceUseCase();
    const result = await updateCharacterExperienceUseCase.execute({
      id,
      experience
    });

    return response.json(result);
  }
}