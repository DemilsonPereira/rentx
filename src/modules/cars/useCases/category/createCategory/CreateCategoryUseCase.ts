import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../../repositories/category/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
