import { CreateSpecificationController } from '../../controller/specification/CreateSpecificationController';
import { ListSpecificationController } from '../../controller/specification/ListSpecificationController';
import { SpecificationsRepository } from '../../repositories/especification/SpecificationsRespository';
import { CreateSpecificationService } from './CreateSpecificationService';
import { ListSpecificationService } from './ListSpecificationService';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService,
);

const listSpecificationService = new ListSpecificationService(
  specificationsRepository,
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationService,
);

export { createSpecificationController, listSpecificationController };
