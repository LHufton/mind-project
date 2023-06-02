const Habit = require('../models/habit')

module.exports = {
  create,
  delete: deleteNote
}

async function create(req, res) {
  const habit = await Habit.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  habit.notes.push(req.body)
  try {
    await habit.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/habits/${habit._id}`)
}

async function deleteNote(req, res, next) {
  const habits = await Habit.find({})

  habits.forEach((habit, idx) => {
    habit.notes.forEach((comment, idc) => {
      if (comment.id === req.params.id) {
        habit.notes.splice(idc, 1)

        habit.save()
        res.redirect(`/habits/${habit.id}`)
      }
    })
  })
}
