const { Schema, model } = require('mongoose');

// Used when publish or save the created plan
const travelPlanSchema = new Schema (
    {
        basicInfo: {
            type: Schema.Types.ObjectId,
            ref: 'BasicPlanInfo'
        },
        activity: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Activity'
            }
        ],
        routes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Location'
            }
        ]
    }
);

const TravelPlan = model('TravelPlan', travelPlanSchema);

module.exports = TravelPlan;
