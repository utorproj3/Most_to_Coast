const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { Activity, Day, Plan, User } = require('../models');

db.once('open', async () => {
  await Activity.deleteMany({});
  await Day.deleteMany({});
  await Plan.deleteMany({});
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  let createdDays = [];
  for (let i = 0; i < 20; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = Object.entries(createdUsers.insertedIds)[randomUserIndex][1];

    const planTitle = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const destination = faker.address.city();
    const descriptionText = faker.lorem.sentences(2, 3);
    const startDate = faker.date.future();
    const endDate = new Date().setDate(startDate.getDate() + (Math.round(Math.random() * 10) + 1));
    
    const plan = await Plan.create({ planTitle, destination, descriptionText, startDate, endDate });
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { myPlans: plan._id } },
      { new: true },
    );

    const createdDay = await Day.create({ dayNumber: 1 });
    await Plan.findOneAndUpdate(
      { _id: plan._id },
      { $push: { days: createdDay } },
      { new: true }
    );

    createdDays.push(createdDay);
  }

  

  for (let i = 0; i < 30; i += 1) {

    const randomPlans = await Plan.find().populate('days'); 
    const randomPlanIndex = Math.floor(Math.random() * randomPlans.length);
    const selectedPlan = randomPlans[randomPlanIndex];


    const existDays = selectedPlan.days.length;
    let { dayNumber } = selectedPlan.days[existDays - 1];


    ++dayNumber;


    const createdDay = await Day.create({ dayNumber: dayNumber });
    await Plan.findOneAndUpdate(
      { _id: selectedPlan._id },
      { $push: { days: createdDay } },
      { new: true }
    );

    createdDays.push(createdDay); 
  }
  

  for (let i = 0; i < 60; i += 1) {

    const name = faker.lorem.words(Math.round(Math.random() * 3) + 1);
    const place = [
      faker.address.streetAddress(true), 
      faker.address.city(), 
      faker.address.country()
    ].join();
    

    let amOrPm;


    const time = [9, 12, 3, 6];
    const startHour = time[Math.floor(Math.random() * time.length)];
    if (startHour === 9) {
      amOrPm = 'am';
    } else {
      amOrPm = 'pm';
    }


    
    const startTime = [
      startHour, 

      amOrPm
    ].join('');

    const endTime = [
      startHour + 1,

      amOrPm
    ].join('');
    

    const randomDayIndex = Math.floor(Math.random() * createdDays.length);
    let { _id: dayId } = createdDays[randomDayIndex];


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
