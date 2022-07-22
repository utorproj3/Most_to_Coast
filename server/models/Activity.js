const { Schema, model } = require('mongoose');

// add activity to the time schedule
const activitySchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        place: {
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
            type: String,
            match: [/[https?:\/\/www\.?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_\+.~#?&/\/=]*/, 'Must match a url address.']
        }
    }
);

const Activity = model('Activity', activitySchema);

module.exports = Activity;
