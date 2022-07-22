const { AuthenticationError } = require('apollo-server-express');
const { User, Plan, Day, Activity } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // if there is user token in req headers, return user data, or else throw err
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate('myPlans');
      }

      throw new AuthenticationError('Not logged in');
    },
    allUsers: async (parent, args, context) => {
      return User.find();
    },
    allTravelPlans: async () => {
      if (context.user) {
        return Plan.find();
      }

      throw new AuthenticationError('Not logged in');
    },
    singlePlan: async (parent, { _id }) => {
      if (context.user) {
        return Plan.findOne({ _id })
          .populate('days');
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    
  }
};

module.exports = resolvers;
