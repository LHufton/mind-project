const express = require('express')
const router = express.Router()

const ensureLoggedIn = require('../config/ensureLoggedIn')
const notesCtrl = require('../controllers/notes')

router.get('/', notesCtrl.index)
router.get('/new', ensureLoggedIn, notesCtrl.new)

router.get('/:id', notesCtrl.show)
router.post('/', ensureLoggedIn, notesCtrl.create)

module.exports = router
