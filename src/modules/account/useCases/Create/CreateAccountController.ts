import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export class CreateAccountController {
  async handle(request: Request, response: Response) {
    const { username, password, nickname } = request.body;    

    const createAccountUseCase = new CreateAccountUseCase;
    const result = await createAccountUseCase.execute({
      username,
      password,
      nickname
    });

    return response.json(result);
  }
}