import { Request, Response } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRepository = new CategoriesRepository();

class CreateCategoryController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository,
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
