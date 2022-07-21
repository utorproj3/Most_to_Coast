const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    country: {
      type: [String],
      required: true,
      unique: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    picture: {
      type: String,
      match: [/[https?:\/\/www\.?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_\+.~#?&/\/=]*/, 'Must match a url address.']
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Location = model('Location', locationSchema);

module.exports = Location;