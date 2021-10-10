import { arch, argv  } from 'process';

console.log(`This processor architecture is ${arch}`);


argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});