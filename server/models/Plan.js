const { Schema, model } = require('mongoose');

const PlanSchema = new Schema(
  {
    //Because it will only create for the logged in user, we probably dont need this code
    username: {
          type: Schema.Types.ObjectId,
          ref: 'User'
    },

    planTitle: {
      type: String,
      required: true,
      trim: true
    },

    destination: {
      type: [String],
      required: true,
      trim: true
  },

    descriptionText: {
      type: String,
      required: 'You need to provide your reaction text.',
      minLength: 1,
      maxLength: 280
  },

    days: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Day'
    }
  ],

    startDate: {
      type: Date,
      required: 'You need to provide the start Date of the trip'
    },

    endDate: {
      type: Date,
      required: 'You need to provide the end date of the trip'
    }
  },

  {
    toJSON: {
      virtuals: true
    }
  }
);


const Plan = model('Plan', PlanSchema);

module.exports = Plan;