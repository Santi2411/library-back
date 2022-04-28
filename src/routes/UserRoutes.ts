import { Application, Request, Response } from "express";
import IndexRoutes from "./IndexRoutes";

class UserRoutes extends IndexRoutes {
    constructor(app: Application) {
        super(app, 'User');
    }

    setUpRoutes(): Application {
        this.app.get('/user', (req: Request, res: Response) => { res.status(200).send({ message: 'User Get All Route' }) });

        this.app.get('/user/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Get One Route' }) });

        this.app.post('/user', (req: Request, res: Response) => { res.status(200).send({ message: 'User Post Route' }) });

        this.app.put('/user/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Put Route' }) });

        this.app.delete('/user/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'User Delete Route' }) });

        return this.app;
    }
}

export default UserRoutes;