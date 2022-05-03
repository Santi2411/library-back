import User from '../models/User';
import UserEntity from '../entities/UserEntity';

class UserRepository {
    getAll(filter: any): Promise<UserEntity[]> {
        return new Promise((resolve, reject) => {
            User.find(filter)
                .exec((err, res) => {
                    if (err) reject(err.message);
                    resolve(res);
                });
        });
    }

    getById(id: string): Promise<UserEntity | null> {
        return new Promise((resolve, reject) => {
            User.findById(id)
                .exec((err, res) => {
                    if (err) reject(err.message);
                    resolve(res);
                });
        });
    }

    create(user: UserEntity): Promise<UserEntity> {
        return new Promise((resolve, reject) => {
            User.create(user, (err, res) => {
                if (err) reject(err.message);
                resolve(res);
            });
        });
    }

    update(id: string, user: UserEntity): Promise<any> {
        return new Promise((resolve, reject) => {
            User.updateOne({ _id: id }, { $set: user }, (err: any, res: any) => {
                if (err) reject(err.message);
                resolve(res);
            });
        });
    }

    delete(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            User.deleteOne({ _id: id }, (err: any, res: any) => {
                if (err) reject(err.message);
                resolve(res);
            });
        });
    }
}

export default new UserRepository();