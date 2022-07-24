const { faker } = require('@faker-js/faker');

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
  let createdDays = [];
  for (let i = 0; i < 20; i += 1) {
    // choose user at random
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = Object.entries(createdUsers.insertedIds)[randomUserIndex][1];

    // create plan data
    const planTitle = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const destination = faker.address.city();
    const descriptionText = faker.lorem.sentences(2, 3);
    const startDate = faker.date.future();
    const endDate = new Date().setDate(startDate.getDate() + (Math.round(Math.random() * 10) + 1));
    
    // create plan in db
    const plan = await Plan.create({ planTitle, destination, descriptionText, startDate, endDate });
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { myPlans: plan._id } },
      { new: true },
    );

    // create 1st day in the plan
    const createdDay = await Day.create({ dayNumber: 1 });
    await Plan.findOneAndUpdate(
      { _id: plan._id },
      { $push: { days: createdDay } },
      { new: true }
    );

    createdDays.push(createdDay);
  }

  
  // create Days
  for (let i = 0; i < 30; i += 1) {
    // randomly select plan
    const randomPlans = await Plan.find().populate('days'); // <- This is to renew the info to increment dayNumber
    const randomPlanIndex = Math.floor(Math.random() * randomPlans.length);
    const selectedPlan = randomPlans[randomPlanIndex];

    // get the last day's dayNumber
    const existDays = selectedPlan.days.length;
    let { dayNumber } = selectedPlan.days[existDays - 1];

    // increment the number from randomly selected Plan's dayNumber
    ++dayNumber;

    // create Day in db
    const createdDay = await Day.create({ dayNumber: dayNumber });
    await Plan.findOneAndUpdate(
      { _id: selectedPlan._id },
      { $push: { days: createdDay } },
      { new: true }
    );

    createdDays.push(createdDay); 
  }
  
  // create activities
  for (let i = 0; i < 60; i += 1) {
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
      // 9:00am to 11:59am
      startHour = Math.floor(Math.random() * (11 + 1 - 9)) + 9;
      amOrPm = 'am';
    } else {
      // 12:00pm to 11:59pm
      startHour = Math.floor(Math.random() * 12) + 1;
      amOrPm = 'pm';
    }

    // add leading 0 to 1 digit number
    const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    
    const startTime = [
      startHour, 
      ':', 
      minute,
      amOrPm
    ].join('');
    // add 1 hour to the startTime as endTime
    const endTime = [
      startHour + 1,
      ':', 
      minute,
      amOrPm
    ].join('');
    
    // randomly select day
    const randomDayIndex = Math.floor(Math.random() * createdDays.length);
    let { _id: dayId } = createdDays[randomDayIndex];

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
