const { Schema, model } = require('mongoose');


const DaySchema = new Schema (
    {
        dayNumber: {
            type: Number,
            required: true,

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
