import { Category } from '../../../entities/Category';
import { ICategoriesRepository } from '../../../repositories/category/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return null;
  }
}

export { ListCategoryUseCase };
