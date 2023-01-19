import { Request, Response } from "express";
import { FindAllAttributesUseCase } from "./FindAllAttributesUseCase";

export class FindAllAttributesController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const findAllAttributesUseCase = new FindAllAttributesUseCase();
    const result = await findAllAttributesUseCase.execute({
      name
    });

    return response.json(result);
  }
}