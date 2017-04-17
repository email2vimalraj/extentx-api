import mongoose from 'mongoose';

const AuthorTestsTestAuthorsSchema = new mongoose.Schema({
    test_authors: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    author_tests: { type: mongoose.Schema.Types.ObjectId, ref: 'author' },
    author: String,
    test: String
}, { collection: 'author_tests__test_authors' });

const AuthorTestsTestAuthors = mongoose.model('author_tests__test_authors', AuthorTestsTestAuthorsSchema);

export { AuthorTestsTestAuthors };
