const user = require('express').Router();
const controller = require('../controllers/user.controller')
const middleware = require('../middleware/user.middleware')

user.post('/register', middleware.validateRegister, controller.Register)
user.post('/login', controller.Login)
user.get('/secret', middleware.isLoggedIn, controller.Secret)

module.exports = user
