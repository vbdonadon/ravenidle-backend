import { NextFunction, Request, Response } from "express";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";

export class UpdateStatusController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.body;

    const updateStatusUseCase = new UpdateStatusUseCase();
    const result = await updateStatusUseCase.execute({
      id
    });

    result;

    return next();
  }
}