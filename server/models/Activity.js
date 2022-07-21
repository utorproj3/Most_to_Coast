const { Schema, model } = require('mongoose');

// add activity to the time schedule
const activitySchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        picture: {
            type: String
        }
    }
);

const Activity = model('Activity', activitySchema);

module.exports = Activity;
