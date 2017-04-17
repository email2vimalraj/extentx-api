import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
    name: String,
    value: String,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'settings' });

const Settings = mongoose.model('settings', SettingsSchema);

export { Settings };
