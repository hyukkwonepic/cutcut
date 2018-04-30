var alphabet = require('./../constants').alphabet;
var base = alphabet.length;

function encode(num) {
  var encoded = '';
  while(num) {
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
}

module.exports = encode;