const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema({
  what: {
    type: String,
    required: true
  },
  when: {
    type: String,
    required: true
  },
  where: {
    type: String,
    required: true
  },
  howLong: {
    type: String,
    required: true
  },
  finished: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Habit', habitSchema)
