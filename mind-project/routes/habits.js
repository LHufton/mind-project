const express = require('express')
const router = express.Router()

const ensureLoggedIn = require('../config/ensureLoggedIn')
const habitsCtrl = require('../controllers/habits')

router.get('/', habitsCtrl.index)
router.get('/new', ensureLoggedIn, habitsCtrl.new)

router.post('/', ensureLoggedIn, habitsCtrl.create)
router.get('/:id', habitsCtrl.show)

module.exports = router
