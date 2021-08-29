import { inject, injectable } from 'tsyringe';

import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepository } from '../../../repositories/especification/ISpecificationRepository';

@injectable()
class ListSpecificationService {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specification = await this.specificationRepository.list();

    return specification;
  }
}

export { ListSpecificationService };
