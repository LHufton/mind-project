const Habit = require('../models/habit')

module.exports = {
  index,
  new: newHabit,
  create
}
function index(req, res) {
  res.render('habits/index', {
    habits: Habit.find()
  })
}

async function create(req, res) {}

function newHabit(req, res) {
  res.render('habits/new', { title: 'Add Habit', errorMsg: '' })
}
