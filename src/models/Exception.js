import mongoose from 'mongoose';

const ExceptionSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    name: String,
    stackTrace: String,
    testCount: Number
}, { collection: 'exception' });

const Exception = mongoose.model('exception', ExceptionSchema);

export { Exception };
