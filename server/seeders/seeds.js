const faker = require('faker');

const db = require('../config/connection');
const { Activity, Day, Plan, User } = require('../models');

db.once('open', async () => {
  await Activity.deleteMany({});
  await Day.deleteMany({});
  await Plan.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  let createdPlans = [];

  // create plans
  for (let i = 0; i < 20; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    const planTitle = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const destination = faker.address.cityName();
    const descriptionText = faker.lorem.sentences();
    const startDate = faker.date.future();
    const endDate = faker.date.between(startDate, startDate + (Math.round(Math.random() * 10) + 1));

    const createdPlan = await Plan.create({ planTitle, destination, descriptionText, startDate, endDate });

    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { myPlans: createdPlan._id } },
      { new: true },
    );

    const createdDay = await Day.create({ dayNumber: 1 });
    await Plan.findOneAndUpdate(
      { _id: createdPlan._id },
      { $addToSet: { days: createdDay } },
      { new: true }
    );

    createdPlans.push(createdPlan);
  }

  // create Days
  let createdDays = [];
  for (let i = 0; i < 100; i += 1) {
    const dayNumber = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdThought = await Thought.create({ thoughtText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { thoughts: createdThought._id } }
    );

    createdThoughts.push(createdThought);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
