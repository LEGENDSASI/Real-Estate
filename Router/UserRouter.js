const express = require('express')
const UserControllerClass = require('../Controller/UserController')

const router = express.Router()

const UserController = new UserControllerClass()


router.post('/register',UserController.register)
router.post('/login',UserController.login)



module.exports = router

