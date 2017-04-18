import { Project } from './models/Project';
import { Report } from './models/Report';
import { Test } from './models/Test';

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
        },

        getAllTests: () => {
            return Test.find({})
                .populate('project')
                .populate('report')
                .then((tests) => tests);
        },

        getAllParentTestsByProjectId: (_, args) => {
            return Test.find({project: args.projectId, level: 0})
                .populate('project')
                .populate('report')
                .then((tests) => tests);
        }
    }
};
