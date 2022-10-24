const app = require('./app');

const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus()

const config = require('./configs/app.config')

// if (cluster.isPrimary) {
//     console.log(`Primary ${process.pid} is running`);
//     // Fork workers.
//     numCPUs.forEach(() => cluster.fork())

//     //Zero down
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`worker ${worker.process.pid} died`);
//         cluster.fork()
//     })
// }
// else {
    app.listen(config.port, config.host, () => console.log(`START: ${process.pid} http://${config.host}:${config.port}`))
// }