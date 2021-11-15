process.stdin.resume();

/*function handle(signal) {
    console.log(`Received ${signal}`);
}*/
process.on('SIGINT', () => {
    console.log(`Received signal of close`);
    process.abort();
});

process.on('SIGWINCH', () => {
    console.log('resizing console');
});

//process.on('SIGINT', handle);
//process.on('SIGTERM', handle);