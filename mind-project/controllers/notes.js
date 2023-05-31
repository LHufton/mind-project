const Note = require('../models/note')

module.exports = {
  index,
  new: newNote
}
function index(req, res) {
  res.render('notes/index', {
    habits: Note.find()
  })
}

function newNote(req, res) {
  res.render('notes/new', { title: 'Add Note', errorMsg: '' })
}
