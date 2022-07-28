import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const EDIT_USER = gql`
  mutation editUser($input: UserInput) {
    editUser(input: $input) {
      username
      iconUrl
      description
    }
  }
`;

export const CREATE_PLAN = gql`
  mutation createPlan($input: PlanInput) {
    createPlan(input: $input) {
      _id
      planTitle
      destination
      descriptionText
      startDate
      endDate
      days {
        _id
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
`;

export const CREATE_DAY = gql`
  mutation createDay($planId: ID!, $input: DayInput) {
    createDay(planId: $planId, input: $input) {
      _id
      dayNumber
      activities {
        _id
      }
    }
  }
`;

export const EDIT_ACTIVITY = gql`
  mutation editPlan($input: PlanInput, $planId: ID!) {
    editPlan(input: $input, planId: $planId) {
      _id
      planTitle
      destination
      descriptionText
      startDate
      endDate
      days {
        _id
      }
    }
  }
`;

export const REMOVE_PLAN = gql`
  mutation removePlan($id: ID!) {
    removePlan(_id: $id) {
      _id
      username
    }
  }
`;

export const REMOVE_DAY = gql`
  mutation removeDay($planId: ID!, $id: ID!) {
    removeDay(planId: $planId, _id: $id) {
      _id
      days {
        _id
      }
    }
  }
`;
export const REMOVE_ACTIVITY = gql`
  mutation removeActivity($dayId: ID!, $id: ID!) {
    removeActivity(dayId: $dayId, _id: $id) {
      _id
      dayNumber
      activities {
        _id
        description
      }
    }
  }
`;
