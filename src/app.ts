import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import path from 'path';
import swaggerUI from 'swagger-ui-express';

import './database';
import './shared/container';

import { AppError } from './errors/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';

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
    this.app.set('port', process.env.PORT || 3000);
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(express.static(path.join(__dirname, 'build')));
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
  }

  routes(): void {
    this.app.use(router);
    this.app.get('/', (request: Request, response: Response) => {
      return response.json({ msg: 'Server Online! 😎' });
    });
    this.app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }
        return response.status(500).json({
          status: 'error',
          message: `Internal server error - ${err.message}`,
        });
      },
    );
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
