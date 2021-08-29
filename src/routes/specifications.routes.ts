import { Router } from 'express';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateSpecificationController } from '../modules/cars/useCases/specification/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/specification/listSpecifications/ListSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.use(ensureAuthenticate);
specificationsRoutes.post('/', createSpecificationController.handle);
specificationsRoutes.get('/', listSpecificationController.handle);

export { specificationsRoutes };
