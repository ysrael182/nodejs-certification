const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.once('newListener', (event, listener) => {
    if (event === 'start') {
        console.log("before a listener was attached");
    }
});

myEventEmitter.on('start', () => {
    console.log('A')
});

myEventEmitter.addListener('start', () => {
    console.log('BA')
});




myEventEmitter.emit('start');