const Note = require('../models/note')
const Habit = require('..models/habit')

const index = async (req, res) => {
  res.render('habits/index', {
    habits: await Habit.find()
  })
}
