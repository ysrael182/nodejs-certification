
console.log(`the process id is: ${process.pid}`);
process.stdin.resume();

process.on('SIGWINCH',  ()=> {
   console.log("resizing the console, it will close the nodejs");
   setTimeout(() => {
       process.kill(process.pid);
   }, 2000);
});
