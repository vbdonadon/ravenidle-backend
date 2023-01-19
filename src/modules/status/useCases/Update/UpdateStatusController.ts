import { Request, Response } from "express";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";

export class UpdateStatusController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const updateStatusUseCase = new UpdateStatusUseCase();
    const result = await updateStatusUseCase.execute({
      name
    })

    return response.json(result);
  }
}