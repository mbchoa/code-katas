/**
 * The returned function binds the 'this' to the instance of Function which is the function that invoked pipe.
 * Eg: fnA.pipe(fnB) // here 'this' is a reference to the 'fnA' function.
 */
Function.prototype.pipe = function (fn) {
  return (...args) => fn(this(...args));
};
