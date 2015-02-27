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
    var rev = arr.slice().reverse();
    expect(rev.sort(cmp(charCode))).to.eql(arr);
  });

  it('should be able to grab properties', function() {
    var arr = [{a: 1}, {a: 2}, {a: 3}];
    var rev = arr.slice().reverse();
    expect(rev.sort(cmp('a'))).to.eql(arr);
  });
});