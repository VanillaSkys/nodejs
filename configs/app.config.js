require('dotenv').config()

module.exports = {
    host: process.env.HOST || 8000,
    port: process.env.PORT || 80,
    version: process.env.API_VERSION || 1
}