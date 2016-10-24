import test from 'ava';
import oc from '../dist/index.js';

test('foo', t => {
    t.pass();
});

test('oc', t => {
  if (oc != null)
    t.pass();
  else
    t.fail();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});
