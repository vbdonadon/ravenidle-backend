import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { UpdateArchetypeController } from "./modules/archetypes/Update/UpdateArchetypeController";
import { CreateCharacterController } from "./modules/characters/useCases/Create/CreateCharacterController";
import { DeleteCharacterController } from "./modules/characters/useCases/Delete/DeleteCharacterController";
import { FindAllCharacterController } from "./modules/characters/useCases/FindAll/FindAllCharacterController";
import { UpdateCharacterController } from "./modules/characters/useCases/Update/UpdateCharacterController";
import { UpdateStatusController } from "./modules/status/useCases/UpdateStatusController";

const createAccountController = new CreateAccountController();
const createCharacterController = new CreateCharacterController();

const updateCharacterController = new UpdateCharacterController();
const updateArchetypeController = new UpdateArchetypeController();
const updateStatusController = new UpdateStatusController;

const deleteCharacterController = new DeleteCharacterController();

const findAllCharacterController = new FindAllCharacterController();

const routes = Router();

routes.post('/accounts/create', createAccountController.handle);
routes.post('/characters/create', createCharacterController.handle);

routes.put('/characters/update', updateStatusController.handle, updateCharacterController.handle);
routes.put('/characters/update/archetype', updateArchetypeController.handle);

routes.delete('/characters/delete', deleteCharacterController.handle);

routes.get('/characters/find', findAllCharacterController.handle);

export { routes };