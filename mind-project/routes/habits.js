const express = require('express')
const router = express.Router()

const habitsCtrl = require('../controllers/habits')
router.get('/', habitsCtrl.index)
router.get('/new', habitsCtrl.new)

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router
