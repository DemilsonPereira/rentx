import { CreateCategoryController } from '../../../controller/cars/category/CreateCategoryController';
import { ListCategoriesController } from '../../../controller/cars/category/ListCategoriesController';
import { CategoriesRepository } from '../../../repositories/category/CategoriesRepository';
import { CreateCategoryService } from './CreateCategoryService';
import { ListCategoryService } from './ListCategoryService';

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService,
);

const listCategoryService = new ListCategoryService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoryService,
);

export { createCategoryController, listCategoriesController };
