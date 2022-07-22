const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        iconUrl: String
        description: String
        myPlans: [Plan]
    }

    type Plan{
        _id: ID
        username: String
        planTitle: String
        destination: [String]
        descriptionText: String
        days: [Day]
        startDate: Date
        endDate: Date
    }

    type Day{
        _id: ID
        day: Number
        activities: [Activity]
    }

    type Activity{
        _id: ID
        name: String
        place: String
        startTime: String
        endTime: String
        description: String
        picture: String
    }

    type Query {
        me: User
        allUsers: [User]
        allTravelPlans: [Plan]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String): Auth
        createTravelPlan(planTitle: String!, destination: [String!], descriptionText: String!, days: Number!, startDate: Date!, endDate: Date!): Plan
        createActivities(name: String!, place: String!,startTime: String!, endTime: String!,description: String!,picture: String!): Activity
    }

    type Auth{
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
