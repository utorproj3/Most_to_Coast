const { Schema, model } = require('mongoose');

// add activity to the time schedule
const DaySchema = new Schema (
    {
        dayNumber: {
            type: Number,
            required: true,
            // autoIncrement: true
        },

        activities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Activity'
        }
    ]
    }
);

const Day = model('Day', DaySchema);

module.exports = Day;
