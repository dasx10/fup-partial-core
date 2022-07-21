# PartialCore
## install

`npm i --save fup-partial-core`


## Use

```
const partialCore = require('fup-partial-core');

or es module

import partialCore from 'fup-partial-core';

```



## Example

```
const add       = (z, y, x) => x + y + z; // (z, y, x) => x + y + z

const add1      = add(1);                 // (y, x)    => x + y + 1
const result1   = addA(4, 5);             // 10

const add2_3    = add(2, 3);              // (x)       => x + 3 + 2
const result2_3 = addB(6);                // 11
```
