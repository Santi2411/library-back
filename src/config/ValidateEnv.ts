import { cleanEnv, str } from 'envalid';
import dotenv from 'dotenv';

export default function validateEnv() {
    const config = process.env.dotenv ? process.env : dotenv.config().parsed;
    cleanEnv(config, {
        MONGO_PASSWORD: str(),
        MONGO_HOST: str(),
        MONGO_USER: str(),
        MONGO_DB: str(),
    });
}