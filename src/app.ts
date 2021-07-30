import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';

import { categoriesRoutes } from './routes/categories.routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  public configuration(): void {
    this.app.set('port', process.env.PORT || 3333);
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(express.static(path.join(__dirname, 'build')));
  }

  routes(): void {
    // this.app.use(router);
    this.app.use('/categories', categoriesRoutes);
    this.app.get('/', (request: Request, response: Response) => {
      return response.json({ msg: "'Server Online! 🙏'" });
    });

    this.app.post('/courses', (request, response) => {
      const { name } = request.body;

      return response.json({ name });
    });
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(
        `Server is listening http://localhost:${this.app.get('port')} 🚀`,
      );
    });
  }
}

export { Server };
