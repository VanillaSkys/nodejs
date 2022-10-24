const express = require('express');
const app = express();

const cors = require('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')

//Random JWT_SECRET
//require('crypto').randomBytes(36).toString('hex')

require('dotenv').config()
// Logger
const logger = require('./configs/logger.config')
//Backup Database
require('./services/backup.service');
//Middleware
app.use(cors())
app.use(bodyparser.json({ limit: '100mb' }))
app.use(bodyparser.urlencoded({
    limit: '100mb',
    extended: true
}))
// setup the logger
app.use(morgan('combined', { stream: logger }))

app.use('/', require('./routes'));

module.exports = app;