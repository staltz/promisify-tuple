# promisify-tuple

Convert a Node.js-style callback API `(err, val) => void` to a Promise that resolves to a `[err, val]` array.

```
npm install --save promisify-tuple
```

**Before:**

```js
const fs = require('fs')

function main() {
  fs.readFile('./test.js', (err, val) => {
    if (err) console.error(err)
    else console.log(val)
  })
}

main()
```

**Before:**

```js
const fs = require('fs')
const run = require('promisify-tuple')

async function main() {
  const [err, val] = await run(fs.readFile)('./test.js')
  if (err) console.error(err)
  else console.log(val)
}

main()
```

## License

[MIT](LICENSE)
