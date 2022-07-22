const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        iconUrl: String
        description: String
        myPlans: [Plan]
    }

    type Plan {
        _id: ID!
        username: String!
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        days: [Day!]
        startDate: String!
        endDate: String!
    }

    input PlanInput {
        _id: ID!
        username: String!
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        days: [DayInput!]
        startDate: String!
        endDate: String!
    }

    type Day {
        _id: ID
        day: Int
        activities: [Activity]
    }

    input DayInput {
        _id: ID
        day: Int
        activities: [ActivityInput]
    }

    type Activity {
        _id: ID!
        name: String!
        place: String!
        startTime: String!
        endTime: String!
        description: String
        picture: String
    }

    input ActivityInput {
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
        createPlan(input: PlanInput): Plan
        createActivity(input: ActivityInput): Activity
        editPlan(input: PlanInput): Plan
        editActivity(input: ActivityInput): Activity
        removePlan(_id: ID!): User
        removeActivity(_id: ID!): Plan
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
