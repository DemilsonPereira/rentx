import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationService } from './ListSpecificationUseCase';

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationService = container.resolve(
      ListSpecificationService,
    );

    const all = await listSpecificationService.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
