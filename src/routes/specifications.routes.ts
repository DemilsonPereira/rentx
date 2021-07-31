import { Router } from 'express';

import { EspecificationsRepository } from '../modules/cars/repositories/especification/SpecificationsRespository';
import { CreateEspecificationService } from '../modules/cars/services/users/CreateEspecificationService';

const especificationsRoutes = Router();
const especificationsRepository = new EspecificationsRepository();

especificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createEspecificationService = new CreateEspecificationService(
    especificationsRepository,
  );

  createEspecificationService.execute({ name, description });

  return response.status(201).send();
});

especificationsRoutes.get('/', (request, response) => {
  const all = especificationsRepository.list();

  return response.json(all);
});

export { especificationsRoutes };
