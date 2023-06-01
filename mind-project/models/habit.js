const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  taskComplete: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Habit', habitSchema)
