import { Request, Response } from 'express';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

class UserController {
    constructor() { }

    async list(req: Request, res: Response) {
        try {
            const users = await UserRepository.getAll(req.body);
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async view(req: Request, res: Response) {
        try {
            const user = await UserRepository.getById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = await UserRepository.create(req.body);
            user.password = undefined;
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const user = await UserRepository.update(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const user = await UserRepository.delete(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}

export default new UserController();