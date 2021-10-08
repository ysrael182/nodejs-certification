const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('sayHello', () => {
    console.log('Hello Visitor');
});

myEventEmitter.emit('sayHello');

console.log('Prepended another listener function to the event "sayHello"');

myEventEmitter.on('sayHello', () => {
    console.log('Hello Visitor 2');
});


myEventEmitter.prependListener('sayHello', (stream) => { // add the listener to the beginning
    console.log('Good Morning!!!!!!!');
});

myEventEmitter.emit('sayHello');