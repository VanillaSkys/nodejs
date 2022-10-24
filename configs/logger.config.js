const path = require('path')
const rfs = require('rotating-file-stream') // version 2.x

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '../log')
})

module.exports = accessLogStream;
