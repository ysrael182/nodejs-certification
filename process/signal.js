process.stdin.resume();

function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);