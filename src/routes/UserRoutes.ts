import { Application, Request, Response } from "express";
import IndexRoutes from "./IndexRoutes";

class UserRoutes extends IndexRoutes {
    constructor(app: Application) {
        super(app, 'User');
    }

    setUpRoutes(): Application {
        this.app.get('/users', (req: Request, res: Response) => { res.status(200).send({ message: 'User Get All Route' }) });

        this.app.get('/users/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Get One Route' }) });

        this.app.post('/users', (req: Request, res: Response) => { res.status(200).send({ message: 'User Post Route' }) });

        this.app.put('/users/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Put Route' }) });

        this.app.delete('/users/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Delete Route' }) });

        return this.app;
    }
}

export default UserRoutes;