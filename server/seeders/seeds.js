const faker = require('faker');

const db = require('../config/connection');
const { Activity, Day, Plan, User } = require('../models');

db.once('open', async () => {
  // delete all data to reset db
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

  // create user in db
  const createdUsers = await User.collection.insertMany(userData);

  // create plans
  let createdPlans = [];
  for (let i = 0; i < 20; i += 1) {
    // choose user at random
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    // create plan data
    const planTitle = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const destination = faker.address.cityName();
    const descriptionText = faker.lorem.sentences();
    const startDate = faker.date.future();
    const endDate = faker.date.between(startDate, startDate + (Math.round(Math.random() * 10) + 1));

    // create plan in db
    const createdPlan = await Plan.create({ planTitle, destination, descriptionText, startDate, endDate });
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { myPlans: createdPlan._id } },
      { new: true },
    );

    // create 1st day in the plan
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
  for (let i = 0; i < 60; i += 1) {
    // randomly select plan
    const randomPlanIndex = Math.floor(Math.random() * createdPlans.ops.length);
    const { _id: planId, dayNumber } = createdPlans.ops[randomPlanIndex];
    // increment the number from randomly selected Plan's dayNumber
    const dayNumberData =+ dayNumber;

    // create Day in db
    const createdDay = await Day.create({ dayNumber: dayNumberData });
    await Plan.findOneAndUpdate(
      { _id: planId },
      { $addToSet: { days: createdDay } },
      { new: true }
    );

   createdDays.push(createdDay); 
  }

  // create activities
  for (let i = 0; i < 100; i += 1) {
    // create activity data
    const name = faker.lorem.words(Math.round(Math.random() * 3) + 1);
    const place = [
      faker.address.streetAddress(true), 
      faker.address.city(), 
      faker.address.country()
    ].join();
    
    // if the faker returns true, set the start time as 'am' or else 'pm'
    let startHour;
    let amOrPm;
    if (faker.datatype.boolean()) {
      startHour = Math.floor(Math.random() * (12 + 1 - 9)) + 9;
      amOrPm = 'am';
    } else {
      startHour = Math.floor(Math.random() * 12) + 1;
      amOrPm = 'pm';
    }
    
    const startTime = [
      startHour, 
      ':', 
      Math.floor(Math.random() * 60),
      amOrPm
    ].join('');
    // add 1 hour to the startTime as endTime
    const endTime = [
      startHour + 1,
      ':', 
      Math.floor(Math.random() * 60),
      amOrPm
    ].join('');
    
    // randomly select day
    const randomDayIndex = Math.floor(Math.random() * createdDays.ops.length);
    const { _id: dayId } = createdDays.ops[randomDayIndex];

    // create activity in db
    const createdActivity = await Activity.create({ name, place, startTime, endTime });
    await Day.findOneAndUpdate(
      { _id: dayId },
      { $push: { activities: createdActivity._id } },
      { new: true }
    );
  }

  console.log('all seeded!');
  process.exit(0);
});
