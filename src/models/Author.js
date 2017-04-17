import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    tests: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    report: { type: mongoose.Schema.Types.ObjectId, ref: 'report' },
    name: String,
    status: String,
    testName: String
}, { collection: 'author' });

const Author = mongoose.model('author', AuthorSchema);

export { Author };
