const { Schema } = require('mongoose');

// this might be converted to locations schema since it won't be used in other models
// and it has only picture url other than location
const pictureSchema = new Schema (
    {
        url: {
            type: String,
            required: true
        },
        // locationSchema?
        // location: {
        //     type: String,
        //     required: true
        // }
    }
);

module.exports = pictureSchema;
