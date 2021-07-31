import { Especification } from '../../model/Specification';
import { IEspecificationsRepository } from '../../repositories/especification/ISpecificationRepository';

class ListSpecificationService {
  constructor(private especificationRepository: IEspecificationsRepository) {}

  execute(): Especification[] {
    const specification = this.especificationRepository.list();

    return specification;
  }
}

export { ListSpecificationService };
