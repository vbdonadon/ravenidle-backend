import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";

const createAccountController = new CreateAccountController();

const routes = Router();

routes.post('/account/create', createAccountController.handle);

export { routes };