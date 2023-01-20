import { Request,   Response } from "express";
import { FindAllCharacterUseCase } from "./FindAllCharacterUseCase";

export class FindAllCharacterController {
  async handle(request: Request, response: Response) {
    const findAllCharacterUseCase = new FindAllCharacterUseCase();
    const result = await findAllCharacterUseCase.execute();

    return response.json(result);
  }
}