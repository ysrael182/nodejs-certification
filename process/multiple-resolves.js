process.on('multipleResolves', (type, promise, reason) => {
    // Displaying the error
    console.log("Type: ", type);
    console.log("Promise: ", promise);
    console.log("Reason: ", reason);
    //setImmediate(() => process.exit(1));
});
process.on('rejectionHandled', (promise) => {
    //unhandledRejections.delete(promise);
});

process.on('error', (error) => {
    console.log("error"+ error);
});

async function main() {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call');
            resolve('Swallowed resolve');
            reject(new Error('Swallowed reject'));
        });
    } catch {
        throw new Error('Failed');
    }
}

main().then((res)=> {
    //console.log(res);
}).catch(() => {

});