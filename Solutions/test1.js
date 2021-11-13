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
    .find({ isPublished: true, tags: 'backend' })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function run() {
  const courses = await getCourses();
  console.log(`Total backend: ${courses}`)
}

run();