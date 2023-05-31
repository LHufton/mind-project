const Habit = require('../models/habit')

module.exports = {
  index,
  new: newHabit
}
function index(req, res) {
  res.render('habits/index', {
    habits: Habit.find()
  })
}

function newHabit(req, res) {
  res.render('habits/new', { title: 'Add Habit', errorMsg: '' })
}
