import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepository } from '../../../repositories/especification/ISpecificationRepository';

class ListSpecificationService {
  constructor(private especificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specification = this.especificationRepository.list();

    return specification;
  }
}

export { ListSpecificationService };
