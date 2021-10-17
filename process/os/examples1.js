const os = require('os');


console.log("EOL: "+os.EOL+" end.");

console.log(" arch: "+os.arch());

console.log("constants: "+JSON.stringify(os.constants));

console.log("cpus: "+JSON.stringify(os.cpus()));

console.log("free mem: "+os.freemem());

console.log("home directory: "+os.homedir());