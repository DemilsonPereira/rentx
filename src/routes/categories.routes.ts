import { Router } from 'express';

import { CreateCategoryController } from '../controller/CreateCategoryController';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
// import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
