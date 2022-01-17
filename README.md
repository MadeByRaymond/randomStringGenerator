# random-string-generator

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/MadeByRaymond/randomStringGenerator) [![Download Stats](https://img.shields.io/badge/downloads-1.2M/month-brightgreen)](https://github.com/MadeByRaymond/randomStringGenerator)

Library to help you create random strings in your code and in CLI.
Can be useful for creating an identifier (id), slug, salt, PIN code, fixture, etc.

## Installation

To install random-string-generator, use [npm](http://github.com/npm/npm):

```
npm install random-string-generator
```

## Usage

```javascript
var randomstring = require("random-string-generator");

randomstring();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"

randomstring(7);
// >> "xqm5wXX"

randomstring('abc');
// >> "acbbbbccabbccabbbcabcbaccccbacbb"

randomstring({
  length: 12,
  charset: 'alphabetic'
});
// >> "AqoTIzKurxJi"

randomstring({
  charset: 'abc'
});
// >> "accbaabbbbcccbccccaacacbbcbbcbbc"

```

## API

`randomstring(options)`
  - `options`
    - `length` - the length of the random string. (default: 32) [OPTIONAL]
    - `readable` - exclude poorly readable chars: 0OIl. (default: false) [OPTIONAL]
    - `charset` - define the character set for the string. (default: 'alphanumeric') [OPTIONAL]
      - `alphanumeric` - [0-9 a-z A-Z]
      - `alphabetic` - [a-z A-Z]
      - `numeric` - [0-9]
      - `hex` - [0-9 a-f]
      - `binary` - [01]
      - `octal` - [0-7]
      - `custom` - any given characters
    - `capitalization` - [OPTIONAL] define whether the output should be lowercase / uppercase only. (default: null)
      - `lowercase`
      - `uppercase`

## Command Line Usage
You need to install globally with:

```
npm install -g random-string-generator
```

Use any of the following in you CLI (they will perform the same way)

`randomstring <options>`, `random-string <options>`, `random-string-gen <options>`, `random-string-generator <options>`.

See Examples below:

```
  $ randomstring
  > sKCx49VgtHZ59bJOTLcU0Gr06ogUnDJi

  $ randomstring 7
  > CpMg433

  $ random-string-gen length=24 charset=github readable
  > hthbtgiguihgbuttuutubugg
```

## Tests

```
npm install
npm test
```

## LICENSE

random-string-generator is licensed under the MIT license.
