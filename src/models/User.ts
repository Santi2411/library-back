import { Schema, model } from 'mongoose';
import Encrypt from '../lib/Encrypt';

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    image: { type: Map, required: true },
    password: { type: String, required: true },
    blocked: { tpe: Boolean, required: true, default: false },
}, {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
});

UserSchema.pre("save", async function (next) {
    const user = this;
    if (this.isModified("password") || this.isNew) {
        Encrypt.encrypt(this.password)
            .then(hash => {
                user.password = hash;
            }).catch(err => {
                next(err)
            });
    } else {
        return next()
    }
});

export default model('User', UserSchema);