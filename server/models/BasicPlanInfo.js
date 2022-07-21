const { Schema, model } = require('mongoose');

const BasicPlanInfoSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    planTitle: {
      type: [String],
      required: true,
      trim: true
    },

    city: {
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

    days: {
      type: Number,
      required: 'You need to provide the number of days'
    },

    startTime: {
      type: String,
      required: 'You need to provide the start time of the day'
    },

    endTime: {
      type: String,
      required: 'You need to provide the end time of the day'
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


const BasicPlanInfo = model('BasicPlanInfo', BasicPlanInfoSchema);

module.exports = BasicPlanInfo;