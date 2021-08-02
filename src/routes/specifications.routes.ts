import { Router } from 'express';

import {
  createSpecificationController,
  listSpecificationController,
} from '../modules/cars/services/specification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
