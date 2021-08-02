import { Request, Response } from 'express';

import { ListSpecificationService } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationService.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
