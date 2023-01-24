import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { UpdateArchetypeController } from "./modules/archetypes/Update/UpdateArchetypeController";
import { CreateCharacterController } from "./modules/characters/useCases/Create/CreateCharacterController";
import { FindAllCharacterController } from "./modules/characters/useCases/FindAll/FindAllCharacterController";
import { UpdateCharacterController } from "./modules/characters/useCases/Update/UpdateCharacterController";

const createAccountController = new CreateAccountController();
const createCharacterController = new CreateCharacterController();

const updateCharacterController = new UpdateCharacterController();
const updateArchetypeController = new UpdateArchetypeController();

const findAllCharacterController = new FindAllCharacterController();

const routes = Router();

routes.post('/accounts/create', createAccountController.handle);
routes.post('/characters/create', createCharacterController.handle);

routes.put('/characters/update', updateCharacterController.handle);
routes.put('/characters/update/archetype', updateArchetypeController.handle)

routes.get('/characters/find', findAllCharacterController.handle);

export { routes };