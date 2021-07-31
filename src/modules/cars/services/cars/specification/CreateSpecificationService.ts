import { IEspecificationsRepository } from '../../../repositories/especification/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private especificationRepository: IEspecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.especificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    this.especificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
