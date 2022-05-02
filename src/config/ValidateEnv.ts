import { cleanEnv, str, num } from 'envalid';
import dotenv from 'dotenv';

export default function validateEnv() {
    const config = process.env.DOTENV ? process.env : dotenv.config().parsed;
    cleanEnv(config, {
        MONGO_PASSWORD: str(),
        MONGO_HOST: str(),
        MONGO_USER: str(),
        MONGO_DB: str(),
        SALT: num(),
    });
}