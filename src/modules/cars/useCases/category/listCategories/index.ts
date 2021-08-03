import { CategoriesRepository } from '../../../repositories/category/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoriesRepository = null;
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoryUseCase,
);

export { listCategoriesController };
