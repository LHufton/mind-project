const Habit = require('../models/habit')

module.exports = {
  index,
  show,
  new: newHabit,
  create,
  delete: deleteHabit
}

async function index(req, res) {
  console.log(req.query)
  res.render('habits/index', {
    habits: await Habit.find()
  })
}
async function show(req, res) {
  const habit = await Habit.findById(req.params.id)
  res.render('habits/show', {
    title: 'Habits Tracker',
    habit
  })
}
function newHabit(req, res) {
  res.render('habits/new', { title: 'Add Habit', errorMsg: '' })
}

async function create(req, res) {
  try {
    const habit = await Habit.create(req.body)
    res.redirect('/habits')
  } catch (err) {
    res.render('habits/new', { errorMsg: err.message })
  }
}
// async function deleteHabit(req, res) {
//   await Habit.findOneAndDelete({ _id: req.params.id })
//   res.render('/habits')
// }
async function deleteHabit(req, res) {
  try {
    await Habit.findOneAndDelete({ _id: req.params.id })
    res.redirect('/habits')
    console.log('Delete controller function hit')
  } catch (error) {
    console.log(error)
  }
}
