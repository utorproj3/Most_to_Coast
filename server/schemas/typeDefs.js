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
        startDate: String
        endDate: String
        days: [Day]
    }

    input PlanInput {
        _id: ID
        planTitle: String!
        destination: [String!]
        descriptionText: String!
        startDate: String
        endDate: String
        days: [DayInput]
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

    input UserInput {
        username: String
        iconUrl: String
        description: String
    }

    type Query {
        me: User
        allUsers: [User]
        allTravelPlans: [Plan]
        searchPlansByUser(username: String!): User
        singlePlan(_id: ID!): Plan
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String): Auth
        createPlan(input: PlanInput): Plan
        editUser(input: UserInput): User
        editPlan(planId: ID!, input: PlanInput): Plan
        removePlan(_id: ID!): User
        createDay(planId: ID!, input: DayInput): Day
        removeDay(planId: ID!, _id: ID!): Plan
        createActivity(planId: ID!, dayId: ID!, input: ActivityInput): Activity
        editActivity(activityId: ID!, input: ActivityInput): Activity
        removeActivity(dayId: ID!, _id: ID!): Day
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
