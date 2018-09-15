const test = require('tape');
const run = require('./index');
const fs = require('fs');

test('it can be used fs.readFile', async t => {
  t.plan(3);
  const [err, val] = await run(fs.readFile)('./test.js');
  t.error(err);
  t.ok(val);
  t.ok(val.length > 10);
});
