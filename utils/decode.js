var alphabet = require('./../constants').alphabet;
var base = alphabet.length;

function decode(str) {
  var decoded = 0;
  while(str) {
    var index = alphabet.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}

module.exports = decode;