import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    testName: String,
    sequence: Number,
    mediaType: String,
    path: String,
    log: { type: mongoose.Schema.Types.ObjectId, ref: 'log' },
    updatedAt: Date
}, { collection: 'media' });

const Media = mongoose.model('media', MediaSchema);

export { Media };
