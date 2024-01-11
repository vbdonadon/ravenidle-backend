import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { UpdateArchetypeController } from "./modules/archetypes/Update/UpdateArchetypeController";
import { CreateCharacterController } from "./modules/characters/useCases/Create/CreateCharacterController";
import { DeleteCharacterController } from "./modules/characters/useCases/Delete/DeleteCharacterController";
import { FindAllCharacterController } from "./modules/characters/useCases/FindAll/FindAllCharacterController";
import { UpdateCharacterAttributeController } from "./modules/characters/useCases/Update/Attribute/UpdateCharacterAttributeController";
import { UpdateStatusController } from "./modules/status/useCases/UpdateStatusController";
import { UpdateCharacterExperienceController } from "./modules/characters/useCases/Update/Level/UpdateCharacterExperienceController";

const createAccountController = new CreateAccountController();
const createCharacterController = new CreateCharacterController();

const updateCharacterAttributeController = new UpdateCharacterAttributeController();
const updateCharacterExperienceController = new UpdateCharacterExperienceController();
const updateArchetypeController = new UpdateArchetypeController();

const updateStatusController = new UpdateStatusController;

const deleteCharacterController = new DeleteCharacterController();

const findAllCharacterController = new FindAllCharacterController();

const routes = Router();

routes.post('/accounts/create', createAccountController.handle);
routes.post('/characters/create', createCharacterController.handle);

routes.put('/characters/update/attribute', updateStatusController.handle, updateCharacterAttributeController.handle);
routes.put('/characters/update/experience', updateCharacterExperienceController.handle);
routes.put('/characters/update/archetype', updateArchetypeController.handle);

routes.delete('/characters/delete', deleteCharacterController.handle);

routes.get('/characters/find', findAllCharacterController.handle);

export { routes };