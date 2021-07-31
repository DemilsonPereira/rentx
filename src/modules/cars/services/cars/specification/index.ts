import { CreateSpecificationController } from "../../../controller/cars/specification/CreateSpecificationController";
import { ListSpecificationController } from "../../../controller/cars/specification/ListSpecificationController";
import { SpecificationsRepository } from "../../../repositories/especification/SpecificationsRespository";
import { CreateSpecificationService } from "./CreateSpecificationService";
import { ListSpecificationService } from "./ListSpecificationService";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository,
);
const createCategoryController = new CreateSpecificationController(
  createSpecificationService,
);

const listSpecificationService = new ListSpecificationService(
  specificationsRepository,
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationService,
);

export { createCategoryController, listSpecificationController };
