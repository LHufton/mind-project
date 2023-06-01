const express = require('express')
const router = express.Router()

const habitsCtrl = require('../controllers/habits')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/new', habitsCtrl.new)
router.get('/', habitsCtrl.index)

router.post('/', habitsCtrl.create)
router.post('/', ensureLoggedIn, habitsCtrl.create)

module.exports = router
