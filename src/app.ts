require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { categoriesRoutes } from './routes/categories.routes';

// import morgan from 'morgan'
// import { router } from './routes';

class Server {
  private app: express.Application

  constructor() {
    this.app = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3333);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    // this.app.use(router);
    this.app.use('/categories', categoriesRoutes);
    this.app.get('/', (request: Request, response: Response) => {
      return response.json({ msg: 'Server Online! 🙏' });
    });

    this.app.post('/courses', (request, response) => {
      const { name } = request.body

      return response.json({ name })
    })
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening http://localhost:${this.app.get('port')} 🚀`);
    });
  }
}

export {
  Server
}