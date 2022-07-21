const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
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
        startDay: String
        endDay: String
    }

    type Activities {
        _id: ID
        name: String
        destination: String
        startTime: String
        endTime: String
        description: String
    }

    type TravelPlans {
        _id: ID
        basicInfo: [BasicPlanInfo]
        activity: [Activity]
        routes: [Location]
    }
`;

module.exports = typeDefs;
