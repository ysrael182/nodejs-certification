import { builtinModules as builtin } from 'module';
//const builtin = require('module').builtinModules;
console.log(builtin);

//Todo: this module import doesn't work without projects which are not of the type module, add "type": "module", or  Change .js files extension to .mjs and Add --experimental-modules flag upon running your app.