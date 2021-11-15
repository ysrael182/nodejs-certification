
console.log('start');
process.nextTick(() => {
    console.log('nextTick callback');
});

setTimeout(() => {
    console.log("calling set timeout");
}, 0);

console.log('scheduled');