import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { CreateCharacterController } from "./modules/characters/useCases/Create/CreateCharacterController";
import { FindAllCharacterController } from "./modules/characters/useCases/FindAll/FindAllCharacterController";

const createAccountController = new CreateAccountController();
const createCharacterController = new CreateCharacterController();

const findAllCharacterController = new FindAllCharacterController();

const routes = Router();

routes.post('/accounts/create', createAccountController.handle);
routes.post('/characters/create', createCharacterController.handle);

routes.get('/characters/find', findAllCharacterController.handle);

export { routes };