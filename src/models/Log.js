import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    testName: String,
    sequence: Number,
    status: String,
    timestamp: Date,
    details: String
}, { collection: 'log' });

const Log = mongoose.model('log', LogSchema);

export { Log };
