const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('start', () => {
    console.log('A')
});

myEventEmitter.on('start', () => {
    console.log('B')
});

myEventEmitter.once('start', ()=> {
   console.log('once B');
});

const callbackFunction = () => {
    console.log("C");
};

myEventEmitter.on('start', callbackFunction);


/*myEventEmitter.removeListener('start',() => {
    console.log('once B')
});*/

myEventEmitter.prependListener('start', () => {
    console.log('X');
});

myEventEmitter.emit('start');
//console.log(myEventEmitter.listeners('start'));

//console.log(myEventEmitter.listenerCount('start'));

//console.log(myEventEmitter.getMaxListeners());

//console.log(myEventEmitter.eventNames());

