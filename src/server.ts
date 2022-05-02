import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import IndexRoutes from './routes/IndexRoutes';
import UserRoutes from './routes/UserRoutes';
import BookRoutes from './routes/BookRoutes';
import DataBase from './config/DataBase';
import ValidateEnv from './config/ValidateEnv';

class Server {
    public app: express.Application;

    constructor() {
        ValidateEnv();
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        DataBase.runConnection();
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        const routes: Array<IndexRoutes> = [];

        routes.push(new UserRoutes(this.app));
        routes.push(new BookRoutes(this.app));
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();