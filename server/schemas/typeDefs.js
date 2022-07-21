const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        reviews: [Review]
        iconUrl: String
        description: String
        placesTraveled: [Location]
        myPlans: [TravelPlan]
    }

    type Location {
        _id: ID
        country: [String]
        state: [String]
        city: [string]
    }

    type BasicPlanInfo {
        _id: ID
        username: String
        planTitle: String
        city: String
        descriptionText: String
        days: Number
        startTime: String
        endTime: String
    }


`;

module.exports = typeDefs;
