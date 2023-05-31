const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema({
  didYouEat: {
    type: String,
    required: true
  },
  didYouSleep: {
    type: String,
    min: 0,
    required: true
  },
  didYouGoOutside: {
    type: String,
    required: true
  },
  didYouTakeYourMedication: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Habit', habitSchema)
