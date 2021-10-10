const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', 'C:\\Users\\ysra1\\Documents\\certificacion node\\node-study\\process']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

console.log(process.connected);


ls.on('error', (data) => {
    console.error(`ls stderr: ${data}`);
});