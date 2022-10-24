const routes = require('express').Router();
const config = require('../configs/app.config')

routes.use(`/api/v${config.version}/user`, require('./user.route'));
routes.use(`/api/v${config.version}/crud`, require('./crud.route'));

module.exports = routes;