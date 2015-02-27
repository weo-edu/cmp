var expect = require('chai').expect;
var cmp = require('../');

describe('cmp', function() {
  function charCode(c) {
    return c.charCodeAt();
  }

  it('should work', function() {
    var fn = cmp(charCode);
    expect(fn('a', 'b')).to.equal(-1);
    expect(fn('b', 'a')).to.equal(1);
    expect(fn('a', 'a')).to.equal(0);
  });

  it('should be compatible with Array.prototype.sort', function() {
    var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var reversed = arr.slice().reverse();
    expect(reversed.sort(cmp(charCode))).to.eql(arr);
  });
});