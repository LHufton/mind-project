const express = require('express')
const router = express.Router()

const habitsCtrl = require('../controllers/habits')
router.get('/new', habitsCtrl.new)

router.post('/', habitsCtrl.create)

router.get('/', habitsCtrl.index)

module.exports = router
