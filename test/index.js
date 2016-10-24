import test from 'ava';
import oc from '../dist/index.js';

function testFunction(a, b) {
  return Promise.resolve(a + b);
}

test('oc should be a function', t => {
  t.is(typeof oc, 'function');
});

test('oc should return a function when given a function', t => {
  var tf2 = oc(testFunction);
  t.is(typeof tf2, 'function');
});

test.cb('the transformed function should take a callback', t => {
  var tf2 = oc(testFunction);
  tf2(1, 2, t.end);
});
