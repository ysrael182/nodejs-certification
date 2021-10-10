const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('sayHello', () => {
    console.log('Hello Visitor');
});

myEventEmitter.prependOnceListener('sayHello', () => {
    console.log('Hello Visitor 2');
});

myEventEmitter.emit('sayHello');


console.log('prependOnceListener should be removed');

myEventEmitter.emit('sayHello');