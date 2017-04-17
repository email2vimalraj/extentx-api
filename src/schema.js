import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
    type Project {
        _id: ID!
        name: String
    }
    
    type Report {
        _id: ID!
        name: String
        startTime: String
        project: Project
        endTime: String
        duration: Int
        parentLength: Int
        passParentLength: Int
        failParentLength: Int
        fatalParentLength: Int
        errorParentLength: Int
        warningParentLength: Int
        skipParentLength: Int
        exceptionsParentLength: Int
        childLength: Int
        passChildLength: Int
        failChildLength: Int
        fatalChildLength: Int
        errorChildLength: Int
        warningChildLength: Int
        skipChildLength: Int
        exceptionsChildLength: Int
        grandChildLength: Int
        passGrandChildLength: Int
        failGrandChildLength: Int
        fatalGrandChildLength: Int
        errorGrandChildLength: Int
        warningGrandChildLength: Int
        skipGrandChildLength: Int
        exceptionsGrandChildLength: Int
    }
    
    type Query {
        getAllProjects: [Project]
        getAllReports: [Report]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
