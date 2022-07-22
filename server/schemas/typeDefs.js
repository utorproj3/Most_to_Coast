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

    input Plan{
        _id: ID!
        username: String!
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        days: [Day!]
        startDate: Date!
        endDate: Date!
    }

    type Day{
        _id: ID
        day: Number
        activities: [Activity]
    }

    input Activity{
        _id: ID!
        name: String!
        place: String!
        startTime: String!
        endTime: String!
        description: String
        picture: String
    }

    type Query {
        me: User
        allUsers: [User]
        allTravelPlans: [Plan]
        searchPlansByUser: [Plan]
        singlePlan: Plan
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String): Auth
        createPlan(input: Plan): Plan
        createActivities(input: Activity): Activity
        editPlan(input: Plan): Plan
        editActivity(input: Activity): Activity
        removePlan(_id: ID!): User
        removeActivity(_id: ID!): Plan
    }

    type Auth{
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
