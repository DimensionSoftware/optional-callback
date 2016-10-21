# optional-callback(fn) : Function

[![npm version](https://badge.fury.io/js/optional-callback.svg)](https://badge.fury.io/js/optional-callback)

A function that turns a Promise-returning function into a function that may also take an optional callback as the last parameter instead

## Example

```javascript
var Promise = require('bluebird');
var oc = require('optional-callback');

/* This is a simple function that returns a Promise that will resolve after
   the time specified in `delay` passes.

   @param {Number} delay        milliseconds to wait
   @return {Promise}            a Promise that will resolve after the `delay` milliseconds passes
*/
function foo(delay) {
  return Promise.delay(delay);
}

/* This function works just like `foo`, but it can also take an optional callback.

   @param {Number} delay        milliseconds to wait
   @param {Function} cb         (optional) if provided, the callback will be run after the `delay` expires
   @return {Promise?}           If `cb` is not passed, a Promise will be returned.
                                Otherwise, nothing will be returned.
*/
var foo2 = oc(foo);

// foo2 can work just like the original foo with Promises
foo2(1000).then(function() {
  console.log('done');
}).catch(function(err){
  console.warn(err);
});

// foo2 may also be called with a callback
foo2(1000, function(err){
  if (err) return console.warn(err);
  console.log('done');
});
```
