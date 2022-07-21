const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    state: [
    {
        type: String,
        required: true,
        trim: true
    }
    ],
    city: [
    {
        type: String,
        required: true,
        trim: true
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Location = model('Location', locationSchema);

module.exports = Location;