import mongoose from 'mongoose';

const EnvironmentSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    name: String,
    value: String
}, { collection: 'environment' });

const Environment = mongoose.model('environment', EnvironmentSchema);

export { Environment };
