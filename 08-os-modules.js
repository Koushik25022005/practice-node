const os = require('os');

//info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system has ${os.uptime()} seconds`);

const cuurentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(cuurentOS);