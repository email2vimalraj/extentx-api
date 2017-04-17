import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean,
    lastLoggedIn: Date,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'user' });

const User = mongoose.model('user', UserSchema);

export { User };
