import { EspecificationsRepository } from '../../repositories/especification/SpecificationsRespository';

interface IRequest {
  name: string;
  description: string;
}

class CreateEspecificationService {
  constructor(private especificationsRepository: EspecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.especificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Specification Already exists!');
    }

    this.especificationsRepository.create({ name, description });
  }
}

export { CreateEspecificationService };
