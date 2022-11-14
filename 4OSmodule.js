const os = require('os');


//info about current use

const user = os.userInfo();
console.log(user);

// method returns the system uptime in second
console.log(`the system uptime is ${os.uptime()}`);

// finding about os

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmemory : os.totalmem(),
    freememory : os.freemem()
}

console.log(currentOS);

// for other property refer nodejs documentation on official website.

