process.on('unhandledRejection', error => {
    // Prints "unhandledRejection woops!"
    console.log('unhandledRejection', error.test);
});

process.on('rejectionHandled', (promise) => {
    console.log("rejection handled"+error);
});

const promise = new Promise((_, reject) => reject({ test: 'woops!' }));
promise.then(() => {
    console.log();
}).catch(
    (reason) => { console.log("here")}
    );