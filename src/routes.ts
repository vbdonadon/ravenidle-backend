import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { CreateHuntController } from "./modules/hunts/useCases/Create/CreateHuntController";
import { CreateCharacterController } from "./modules/characters/useCases/Create/CreateCharacterController";

import { UpdateCharacterAttributeController } from "./modules/characters/useCases/Update/Attribute/UpdateCharacterAttributeController";
import { UpdateStatusController } from "./modules/status/useCases/UpdateStatusController";
import { UpdateCharacterExperienceController } from "./modules/characters/useCases/Update/Level/UpdateCharacterExperienceController";
import { UpdateArchetypeController } from "./modules/archetypes/Update/UpdateArchetypeController";

import { FindAllCharacterController } from "./modules/characters/useCases/FindAll/FindAllCharacterController";
import { FindAllHuntController } from "./modules/hunts/useCases/FindAll/FindAllHuntController";

import { DeleteCharacterController } from "./modules/characters/useCases/Delete/DeleteCharacterController";


const createHuntController = new CreateHuntController();
const createAccountController = new CreateAccountController();
const createCharacterController = new CreateCharacterController();

const updateCharacterAttributeController = new UpdateCharacterAttributeController();
const updateCharacterExperienceController = new UpdateCharacterExperienceController();
const updateArchetypeController = new UpdateArchetypeController();
const updateStatusController = new UpdateStatusController;

const findAllCharacterController = new FindAllCharacterController();
const findAllHuntController = new FindAllHuntController();

const deleteCharacterController = new DeleteCharacterController();

const routes = Router();

routes.post('/accounts/create', createAccountController.handle);
routes.post('/characters/create', createCharacterController.handle);
routes.post('/hunt/create', createHuntController.handle);

routes.put('/characters/update/attribute', updateStatusController.handle, updateCharacterAttributeController.handle);
routes.put('/characters/update/experience', updateCharacterExperienceController.handle);
routes.put('/characters/update/archetype', updateArchetypeController.handle);

routes.delete('/characters/delete', deleteCharacterController.handle);

routes.get('/characters/find', findAllCharacterController.handle);
routes.get('/hunt/find-all', findAllHuntController.handle);

export { routes };