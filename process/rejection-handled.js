process.on('unhandledRejection', error => {
    // Prints "unhandledRejection woops!"
    console.log('unhandledRejection', error.test);
});

//new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => {});