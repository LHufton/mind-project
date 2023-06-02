const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
  notes: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
})

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
  },
  notes: [noteSchema]
})
module.exports = mongoose.model('Habit', habitSchema)
