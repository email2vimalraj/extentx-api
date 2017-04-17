import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    level: Number,
    name: String,
    status: String,
    description: String,
    startTime: Date,
    endTime: Date,
    bdd: Boolean,
    childNodesLength: Number,
    duration: Number,
    categorized: Boolean
}, { collection: 'test' });

const Test = mongoose.model('test', TestSchema);

export { Test };
