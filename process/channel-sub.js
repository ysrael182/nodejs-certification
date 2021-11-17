process.on('message', (m) => {
    console.log('CHILD got message:', m);
    setTimeout(() => {
        console.log('doing a task');
        //process.exit();
    }, 3000);
});
