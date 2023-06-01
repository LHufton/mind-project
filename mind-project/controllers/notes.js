const Note = require('../models/note')

module.exports = {
  index,
  show,
  new: newNote,
  create
}

function index(req, res) {
  res.render('notes/index', {
    notes: Note.find()
  })
}

async function show(req, res) {
  const note = await Habit.findById(req.params.id)
  res.render('notes/show', {
    title: 'Notes Tracker',
    habit
  })
}
function newNote(req, res) {
  res.render('notes/new', { title: 'Add Note', errorMsg: '' })
}

async function create(req, res) {
  try {
    const note = await Habit.create(req.body)
    res.redirect('/notes')
  } catch (err) {
    res.render('notes/new', { errorMsg: err.message })
  }
}
