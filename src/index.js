// @flow

/* Transform a Promise-returning function into a function that can optionally
 * take a callback as the last parameter instead.
 *
 * @param   {Function}    fn          a function that returns a Promise
 * @param   {Object}      self        (optional) `this` to be used when applying fn
 * @return  {Function}                a function that can take callbacks as well.
 */
function optionalCallback(fn, self) {
  if (!self) {
    self = this;
  }
  return function() {
    var last = arguments[arguments.length - 1];
    if (typeof last === 'function') {
      return fn.apply(self, arguments).then(function(){
        last.apply(self, arguments);
      }).catch(function(err){
        last(err);
      });
    } else {
      return fn.apply(self, arguments);
    }
  };
}

module.exports = optionalCallback;
