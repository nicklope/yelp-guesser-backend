const router = require('express').Router()
const controller = require('../controllers/AppController')

router.post('/savegame/:userId', controller.CreateGame)
module.exports = router
