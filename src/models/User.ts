import { Schema, model } from 'mongoose';
import UserEntity from '../entities/UserEntity';
import Encrypt from '../lib/Encrypt';

const UserSchema = new Schema<UserEntity>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, createIndexes: { unique: true }, },
    role: { type: String, required: true, default: 'user' },
    image: { type: Map, required: true },
    password: { type: String, required: true, select: false },
    blocked: { type: Boolean, required: true, default: false },
}, {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
});

UserSchema.pre("save", async function (next) {
    var user = this;
    if (this.isModified("password") || this.isNew) {
        if (!user.password) {
            return next(new Error("Password is required"));
        }
        await Encrypt.encrypt(user.password)
            .then(hash => {
                user.password = hash;
                next()
            }).catch(err => {
                next(err)
            });
    } else {
        return next()
    }
});

export default model('User', UserSchema);