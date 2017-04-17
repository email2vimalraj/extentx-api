import { Project } from './models/Project';
import { Report } from './models/Report';

export const resolvers = {
    Query: {
        getAllProjects: () => {
            return Project.find({})
                .then((projects) => projects);
        },

        getAllReports: () => {
            return Report.find({})
                .populate('project')
                .then((reports) => reports);
        }
    }
};
