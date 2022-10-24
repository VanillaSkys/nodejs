const mysqldump = require('mysqldump')
const schedule = require('node-schedule');

function Backup() {
    try {
        let ts = Date.now();

        let date_time = new Date(ts);
        let day = date_time.getDate();
        let month = date_time.getMonth() + 1;
        let year = date_time.getFullYear();
        mysqldump({
            connection: {
                host: process.env.HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                port: process.env.DB_PORT,
            },
            dumpToFile: `./backup/${year}-${month}-${day}-backup.sql`,
        });
    } catch (error) {
        console.log(error)
    }
}
// function DeleteBackup(){
//     try {
//         fs.unlinkSync(`${year}-${month}-${day}-backup.sql`);
//         console.log("Delete File successfully.");
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = schedule.scheduleJob('* * * * Sunday', () => {
    Backup()
    console.log('running a task every minute');
});
