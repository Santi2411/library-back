import { Application, Request, Response } from "express";
import IndexRoutes from "./IndexRoutes";

class BookRoutes extends IndexRoutes {
    constructor(app: Application) {
        super(app, 'Book');
    }

    setUpRoutes(): Application {
        this.app.get('/books', (req: Request, res: Response) => { res.status(200).send({ message: 'book Get All Route' }) });

        this.app.get('/books/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'book Get One Route' }) });

        this.app.post('/books', (req: Request, res: Response) => { res.status(200).send({ message: 'book Post Route' }) });

        this.app.put('/books/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'book Put Route' }) });

        this.app.delete('/books/:id', (req: Request, res: Response) => { res.status(200).send({ message: 'book Delete Route' }) });

        return this.app;
    }
}

export default BookRoutes;