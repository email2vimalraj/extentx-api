import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    name: String
}, { collection: 'project' });

const Project = mongoose.model('project', ProjectSchema);

export { Project };
