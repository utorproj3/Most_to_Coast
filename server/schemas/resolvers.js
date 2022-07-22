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
    // get all users for search selection
    allUsers: async () => {
      return User.find();
    },
    allTravelPlans: async (parent, args, context) => {
      if (context.user) {
        return Plan.find();
      }

      throw new AuthenticationError('Not logged in');
    },
    searchPlanByUser: async (parent, { username }) => {
      const user = await User.findOne({ username })
        .populate('myPlans');
      return user;
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
    login: async (parent, { email, password }) => {
      const user = User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    }
  }
};

module.exports = resolvers;
