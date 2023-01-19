import { Request, Response } from "express";
import { FindAllStatusUseCase } from "./FindAllStatusUseCase";

export class FindAllStatusController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const findAllStatusUseCase = new FindAllStatusUseCase();
    const result = await findAllStatusUseCase.execute({
      name
    });

    return response.json(result);
  }
}