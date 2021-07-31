import { Router } from 'express';

import { createCategoryController } from '../modules/cars/services/cars/category';

const especificationsRoutes = Router();

especificationsRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

especificationsRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { especificationsRoutes };
