import { CategoriesRepository } from '../../../repositories/category/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryService = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryService,
  );
  return createCategoryController;
};
