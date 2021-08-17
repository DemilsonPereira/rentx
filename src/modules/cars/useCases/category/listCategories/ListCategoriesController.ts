import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request: Request, response: Response): Response {
    const all = this.listCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
