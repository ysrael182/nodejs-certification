const { spawn } = require("child_process");
//const ls = spawn('ls', ['-lh', '/']); //Unix
const child = spawn('pwd'); //windows

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.on('disconnect', (data) => {
    console.log(`disconnect : ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

//child.disconnect();