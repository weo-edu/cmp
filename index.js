var prop = require('prop');

module.exports = function(fn) {
  if('string' === typeof fn)
    fn = prop(fn);

  return function(a, b) {
    var key1 = fn(a);
    var key2 = fn(b);
    if(key1 === key2) return 0;
    return key1 < key2 ? -1 : 1;
  };
};