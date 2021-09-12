process.on('multipleResolves', (type, promise, reason) => {
    // Displaying the error
    console.log("Type: ", type);
    console.log("Promsie: ", promise);
    console.log("Reason: ", reason);
    //setImmediate(() => process.exit(1));
});
process.on('rejectionHandled', (promise) => {
    unhandledRejections.delete(promise);
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
});