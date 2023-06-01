const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Note', noteSchema)
