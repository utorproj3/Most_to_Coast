const { Schema, model } = require('mongoose');

const Activity = require('./Activity');

// Used when publish or save the created plan
const travelPlanSchema = new Schema (
    {
        basicInfo: {
            type: Schema.Types.ObjectId,
            ref: 'BasicPlanInfo',
            required: true
        },
        activities: {
            type: [Activity.schema],
            required: true
        },
        routes: {
            type: [travelRoutesSchema]
        }
    },
);

const TravelPlan = model('TravelPlan', travelPlanSchema);

module.exports = TravelPlan;
