import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/category/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/category/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/especification/implementations/SpecificationsRespository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/especification/ISpecificationRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
