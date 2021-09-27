const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();


myEventEmitter.once('newListener', (event, listener) => {
    if (event === 'start') {
        myEventEmitter.addListener('start', () => {
            console.log('B');
        });
    }
});

myEventEmitter.on('start', () => {
    console.log('A')
});


myEventEmitter.emit('start');