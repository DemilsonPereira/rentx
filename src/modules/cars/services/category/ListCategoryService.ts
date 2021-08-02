import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/category/ICategoriesRepository';

class ListCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryService };
