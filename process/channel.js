const cp = require('child_process');
const subProcess = cp.fork(`${__dirname}/channel-sub.js`, [], {detached: true, stdio: 'ignore'});
//const subProcess = cp.fork(`${__dirname}/channel-sub.js`);
// Causes the child to print:



if(subProcess.channel) {
    console.log("Process Channel exist");
    subProcess.send({ hello: 'world' });
    subProcess.channel.unref();
} else {
    console.log("Process Channel doesn't exist");
}
