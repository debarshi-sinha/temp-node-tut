const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

// method return the system upTime in SEC
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)
