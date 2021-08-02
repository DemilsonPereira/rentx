import { Request, Response } from 'express';

import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoriesController {
  constructor(private listCategoryService: ListCategoryService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request: Request, response: Response): Response {
    const all = this.listCategoryService.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
