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
        _id: ID
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        days: [Day]
        startDate: String!
        endDate: String!
    }

    input PlanInput {
        _id: ID
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        days: [DayInput]
        startDate: String!
        endDate: String!
    }

    type Day {
        _id: ID
        dayNumber: Int
        activities: [Activity]
    }

    input DayInput {
        _id: ID
        dayNumber: Int
        activities: [ActivityInput]
    }

    type Activity {
        _id: ID
        name: String!
        place: String!
        startTime: String!
        endTime: String!
        description: String
        picture: String
    }

    input ActivityInput {
        _id: ID
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
        searchPlansByUser: [User]
        singlePlan: Plan
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String): Auth
        createPlan(input: PlanInput): Plan
        editPlan(input: PlanInput): Plan
        removePlan(_id: ID!): User
        createDay(planId: ID!, input: DayInput): Day
        removeDay(planId: ID!, _id: ID!): Plan
        createActivity(input: ActivityInput): Activity
        editActivity(dayId: ID!, input: ActivityInput): Activity
        removeActivity(dayId: ID!, _id: ID!): Day
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
