## Module.export vs export 


export and export default are part of ECMAscript module (ESM or 'es6 modules')

Nodejs prior to v14.13.0 do not support ESM (export keyword)syntax and use commonjs modules (module.export syntax)

Few solutions to use es6 modules in nodejs:

* If you are using NodeJS v14.13.0 or newer (which does support ESM) you can enable it by setting "type":"module" in your project package.json
* Refactor with CommonJS Module syntax (for older versions of NodeJS)
* Consider using TypeScript alongside ts-node or ts-node-dev npm packages (for instant transpilation at development time) and write TypeScript in .ts files
* Transpile ESM to CommonJS using esbuild (esbuild package on npm) configured to transpile your ES6 javascript to a CommonJS target supported by your environment. (babel is no longer recommended)

In package.json File

```javascript
"type":"module" // paste in package.json file 
```
---
#### In commonjs 
```javascript
const x = 2, y = 2;
 
module.exports = {
y, // named export 
default:x
}

const x,{y} = require('./example.js')

```

#### In es6 

```javascript
const x = 2, y = 2;

export {y} // named export ;
export default x; // default export  


import x,{y} from './example.js'

```


