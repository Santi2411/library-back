import { Application, Request, Response } from "express";
import IndexRoutes from "./IndexRoutes";
import UserController from "../controllers/UserController";

class UserRoutes extends IndexRoutes {
    constructor(app: Application) {
        super(app, 'User');
    }

    setUpRoutes(): Application {
        this.app.get('/users', (req: Request, res: Response) => UserController.list(req, res));

        this.app.get('/users/:id', (req: Request, res: Response) => UserController.view(req, res));

        this.app.post('/users', (req: Request, res: Response) => UserController.create(req, res));

        this.app.put('/users/:id', (req: Request, res: Response) => UserController.update(req, res));

        this.app.delete('/users/:id', (req: Request, res: Response) => UserController.delete(req, res));

        return this.app;
    }
}

export default UserRoutes;