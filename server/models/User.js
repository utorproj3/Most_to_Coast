const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    iconUrl: {
      type: String,
      required: false,
      default: 'https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png'
    },
    description: {
      type: String,
      required: false
    },
    placesTraveled: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Location'
      }
    ],
    myPlans: [
    {
        type: Schema.Types.ObjectId,
        ref: 'TravelPlan'
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
