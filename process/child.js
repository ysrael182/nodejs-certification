const MAX_MESSAGES_SEND = 2;

process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;
console.log(`should be connected: ${process.connected}`);

const iteratorInterval = setInterval(() => {
    if(counter > MAX_MESSAGES_SEND) {
        process.disconnect();
        console.log(`connected: ${process.connected}`);
        clearInterval(iteratorInterval);
    } else {
        process.send({ counter: counter++ });
    }
}, 1000)