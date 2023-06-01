const Habit = require('../models/habit')

module.exports = {
  index,
  show,
  new: newHabit,
  create
}
async function index(req, res) {
  res.render('habits/index', {
    habits: await Habit.find()
  })
}
async function show(req, res) {
  const habit = await Habit.findById(req.params.id)
  res.render('habits/show', {
    title: 'Habits Schedule',
    habit
  })
}
async function create(req, res) {
  try {
    const habit = await Habit.create(req.body)
    res.redirect('/habits')
  } catch (err) {
    res.render('habits/new', { errorMsg: err.message })
  }
}

function newHabit(req, res) {
  res.render('habits/new', { title: 'Add Habit', errorMsg: '' })
}
