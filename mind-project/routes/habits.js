const express = require('express')
const router = express.Router()

const habitsCtrl = require('../controllers/habits')
router.get('/', habitsCtrl.index)
router.get('/new', habitsCtrl.new)

module.exports = router
