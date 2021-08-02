import { Request, Response } from 'express';

import { CreateSpecificationService } from '../../services/specification/CreateSpecificationService';

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
