import mongoose from 'mongoose';

const CategoryTestsTestCategoriesSchema = new mongoose.Schema({
    test_categories: { type: mongoose.Schema.Types.ObjectId, ref: 'test' },
    category_tests: { type: mongoose.Schema.Types.ObjectId, ref: 'author' },
    category: String,
    test: String
}, { collection: 'category_tests__test_categories' });

const CategoryTestsTestCategories = mongoose.model('category_tests__test_categories', CategoryTestsTestCategoriesSchema);

export { CategoryTestsTestCategories };
