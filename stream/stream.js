var fs = require('fs');

const readStream = fs.createReadStream('data.txt', { encoding: 'utf8', highWaterMark: 16});

/*readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    readStream.pause();
    console.log('There will be no additional data for 1 second.');
    setTimeout(() => {
        console.log('Now data will start flowing again.');
        readStream.resume();
    }, 1000);
});*/


readStream.on('readable', function() {
    // There is some data to read now.
    let data;

    while (data = this.read()) {
        console.log(data);
    }
});

readStream.on('error', (error) => {
    console.log("ERRROR STREAM "+error);
});