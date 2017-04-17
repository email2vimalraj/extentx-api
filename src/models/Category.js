import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    tests: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    name: String,
    status: String,
    testName: String
}, { collection: 'category' });

const Category = mongoose.model('category', CategorySchema);

export { Category };
