const express = require('express')
const router = express.Router()
const notesCtrl = require('../controllers/notes')

const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, notesCtrl.index)
router.get('/new', ensureLoggedIn, notesCtrl.new)

router.get('/:id', notesCtrl.show)
router.post('/', ensureLoggedIn, notesCtrl.create)
router.post('/habits/:id/notes', notesCtrl.create)

module.exports = router
