Certainly! Here's a brief overview of each of these JavaScript module formats:

1. **AMD (Asynchronous Module Definition)**:
   - **Usage**: Designed for asynchronous module loading in browsers.
   - **Syntax**: Uses `define` function to define modules and `require` function to load dependencies asynchronously.
   - **Example**:
     ```javascript
     define(['dependency1', 'dependency2'], function(dep1, dep2) {
         // Module code here
         return exportedValue;
     });
     ```

2. **CommonJS (CJS)**:
   - **Usage**: Primarily used in Node.js for server-side JavaScript.
   - **Syntax**: Uses `require` function to import modules and `module.exports` or `exports` object to export them.
   - **Example**:
     ```javascript
     const dependency = require('dependency');
     module.exports = exportedValue;
     ```

3. **UMD (Universal Module Definition)**:
   - **Usage**: A format that supports multiple module systems, including AMD, CommonJS, and browser globals.
   - **Syntax**: Uses a wrapper to check for existing module definitions and adapts accordingly.
   - **Example**:
     ```javascript
     (function (root, factory) {
         if (typeof define === 'function' && define.amd) {
             define(['dependency'], factory);
         } else if (typeof module === 'object' && module.exports) {
             module.exports = factory(require('dependency'));
         } else {
             root.MyModule = factory(root.Dependency);
         }
     })(this, function (Dependency) {
         // Module code here
         return exportedValue;
     });
     ```

4. **ES Modules (ESM)**:
   - **Usage**: Standardized in ECMAScript and supported in modern browsers and Node.js (from version 12 onward).
   - **Syntax**: Uses `import` and `export` keywords to define dependencies and export variables.
   - **Example**:
     ```javascript
     // Exporting module
     export function someFunction() {
         // Function code
     }

     // Importing module
     import { someFunction } from './module';
     ```

5. **IIFE (Immediately Invoked Function Expression)**:
   - **Usage**: Used to encapsulate code within its scope and avoid polluting the global namespace.
   - **Syntax**: Wraps code in a function expression that is immediately invoked.
   - **Example**:
     ```javascript
     (function() {
         // Module code here
         var privateVariable = 'private';

         // Expose only what is necessary
         window.MyModule = {
             publicFunction: function() {
                 // Function code
             }
         };
     })();
     ```

Each of these formats serves different purposes and is suited for different environments or scenarios, from asynchronous loading in browsers (AMD) to server-side development (CommonJS) and modern browser-native modules (ESM).