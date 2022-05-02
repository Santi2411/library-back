import bcrypt from 'bcrypt';

class Encrypt {
    public encrypt(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return reject(err);
                }
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(hash);
                });
            });
        });
    }

    public compare(password: string, hash: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    }
}

export default new Encrypt();