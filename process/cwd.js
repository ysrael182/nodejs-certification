import { chdir, cwd } from 'process';

console.log(`Starting directory: ${cwd()}`);
try {
    chdir('C:\\Users\\ysra1\\Documents\\certificacion node\\node-study\\process\\event-emitter');
    console.log(`New directory: ${cwd()}`);
} catch (err) {
    console.error(`chdir: ${err}`);
}