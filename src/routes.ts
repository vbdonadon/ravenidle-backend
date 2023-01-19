import { Router } from "express";

import { CreateAccountController } from "./modules/account/useCases/Create/CreateAccountController";
import { UpdateStatusController } from "./modules/status/useCases/Update/UpdateStatusController";
import { UpdateAttributeController } from "./modules/attributes/useCases/Update/UpdateAttributeController";
import { FindAllStatusController } from "./modules/status/useCases/FindAll/FindAllStatusUseController";
import { FindAllAttributesController } from "./modules/attributes/useCases/FindAll/FindAllAttributesUseController";

const createAccountController = new CreateAccountController();

const updateStatusController = new UpdateStatusController();
const updateAttributeController = new UpdateAttributeController();

const findAllStatusController = new FindAllStatusController();
const findAllAttributesController = new FindAllAttributesController();

const routes = Router();

routes.post('/account/create', createAccountController.handle);

routes.put('/status/update', updateStatusController.handle);
routes.put('/attributes/update', updateAttributeController.handle);

routes.get('/status/find', findAllStatusController.handle);
routes.get('/attributes/find', findAllAttributesController.handle)

export { routes };