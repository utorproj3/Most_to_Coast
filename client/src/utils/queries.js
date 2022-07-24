import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query allUsers {
    allUsers {
      _id
      username
      email
      iconUrl
      description
      myPlans {
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me{
    me {
        _id
        username
        email
        iconUrl
        description
        myPlans {
          _id
          planTitle
      }
    }
  }
`;

export const QUERY_ALL_PLANS = gql`
  query allTravelPlans {
    allTravelPlans {
      _id
      planTitle
      descriptionText
      destination
      days {
        _id
      }
      startDate
      endDate
    }
  }
`

export const QUERY_PLAN_BY_USER = gql`
  query PlansByUser($username: String!) {
    searchPlansByUser(username: $username) {
      _id
      username
      email
      iconUrl
      description
      myPlans {
        _id
        planTitle
        descriptionText
        destination
        days {
          _id
          # dayNumber
        }
        startDate
        endDate
      }
    }
  }
`

export const QUERY_PLAN_BY_ID = gql`
  query singlePlanById($id: ID!) {
    singlePlan(_id: $id) {
      _id
      planTitle
      descriptionText
      destination
      startDate
      endDate
      days {
        _id
        dayNumber
        activities {
          _id
          name
          place
          startTime
          endTime
          description
          picture
        }
      }
    }
  }
`