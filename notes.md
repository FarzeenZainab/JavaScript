# Modules

- Reusable piece of code that encapsulates implementation details
- It is usually a standalone file, but it doesn't have to be
- It can have imports (imports other modules) and exports (export values from inside the modules to make it accessible to other modules)
- Imports are also called dependencies of an importing module
- ES6 Modules are stored in files, exactly one module per file

## Difference between script and module files

- All top level variables are scoped to the module, means that the variable declared inside a module is not accessible outside the module until it is exported. They are private to the module by default. In script file all the top level variable are global scoped. This can cause global namespace pollution where multiple script files tries to declare variables with the same name and then these variables collide

- ES modules are always executed in strict mode while scripts are executed in sloppy mode.

- The this keyword is always undefined at the top level while in the scripts the this keyword points to the window object

- We can export & import values in modules but not in the script files

\*\* All imports are hoisted and moved to the top of the file

- To link a module file in the html we will use type="module"

- File downloading in ES6 is done asynchronously but in scripts it is synchronous

## How ES6 modules are imported

First we parse the code synchronously then downloading modules happens async after which they are executed, after that they are imported synchronously in main index.js file

Only the importing operation is what happens synchronously. Downloading these modules from the server happens asynchronously.

![alt text](image-1.png)

When a value is imported from one module to another, the imported module remains connected to the original value in the source module.

This connection is "LIVE" (not a copy of the original value) because any changes to the original value in the source module will be reflected in the imported value in the destincation module in real-time.

// moduleA.js
export let count = 0;

export function increment() {
count++;
}

// moduleB.js
import { count, increment } from './moduleA.js';

console.log(count); // Outputs: 0
increment();
console.log(count); // Outputs: 1

### LIVE CONNECTION

The live connection means that the imorted `count` in `moduleB.js` is directly linked to the `count`
in `moduleA.js`. Any changes made to `count` in `moduleA.js` (such as calling `increment()`) will be reflected in `moduleB.js` because the import is a reference to the original value, not a copy

### TOP LEVEL AWAIT IN ES2022

We can use await keyword outside async functions at the top level of our modules. This feature was introduced in
ES2022. It only works in modules.

### THE MODULE PATTERN
