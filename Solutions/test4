const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-tests')
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.error(' Could not connect to MongoDB'))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isFinished: Boolean,
  level: Number
})

const Course = mongoose.model('Course', courseSchema);
async function getCourses() {
  return await Course
  .find({ isPublished: true })
  .or([  
    { level: { $eq:2 } },
    { name: /.*by.*/i }
  ])
  .sort('name')
  .select('name level');
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();