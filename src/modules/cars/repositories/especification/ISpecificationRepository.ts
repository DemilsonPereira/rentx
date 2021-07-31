import { Especification } from '../../model/cars/Specification';

interface ICreateEspecificationDTO {
  name: string;
  description: string;
}

interface IEspecificationsRepository {
  findByName(name: string): Especification;
  list(): Especification[];
  create({ name, description }: ICreateEspecificationDTO): void;
}

export { IEspecificationsRepository, ICreateEspecificationDTO };
