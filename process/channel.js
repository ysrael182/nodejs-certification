const cp = require('child_process');
const subProcess = cp.fork(`${__dirname}/channel-sub.js`);

// Causes the child to print:
// CHILD got message: { hello: 'world' }
subProcess.send({ hello: 'world' });


if(subProcess.channel) {
    console.log("Process Channel exist")
} else {
    console.log("Process Channel doesn't exist");
}