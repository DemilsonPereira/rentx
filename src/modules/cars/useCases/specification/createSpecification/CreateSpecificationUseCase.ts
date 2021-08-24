import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../../repositories/especification/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
