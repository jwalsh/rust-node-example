var ffi = require('ffi');
var path = require('path');

var a = ffi.Library(path.join(__dirname, 'libfibonacci.dylib'), {
  fibonacci: ['int', ['int']]
  // treble: ['int', ['int']]
});
var num = a.fibonacci(20);
console.log(num);

var b = ffi.Library(path.join(__dirname, 'libtreble.dylib'), {
  treble: ['int', ['int']]
});
console.log(b.treble(10));
