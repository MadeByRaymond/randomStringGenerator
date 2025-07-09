# random-string-gen

![npm](https://img.shields.io/npm/v/random-string-gen)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/MadeByRaymond/randomStringGenerator) 
![NPM Downloads](https://img.shields.io/npm/d18m/random-string-gen)
![License](https://img.shields.io/npm/l/random-string-gen)


A Library to help you create random strings in your code and in CLI.
Can be useful for creating an identifier (id), slug, salt, PIN code, strong passwords, fixture, etc.

## 📦 Installation

To install random-string-gen, use [npm](http://github.com/npm/cli):

```
npm install random-string-gen
```

## 🧠 Usage

```javascript
var randomstring = require("random-string-gen");

randomstring();
// >> "rDqXcpQ82H0xZEWXAInfRjJKPVQFXshW"

randomstring(7);
// >> "qn7w9jm"

randomstring('abc');
// >> "baccaaababaabbccbaacbabcbabbbcba"

randomstring({
  length: 12,
  type: 'alphabetic'
});
// >> "pYqOzqOxnLHZ"

randomstring({
  charset: 'abc'
});
// >> "aacacbcabcbbabcbccacacbbabcacabc"

randomstring({
  length: 16,
  charset: 'javascript',
  capitalization: 'uppercase'
});
// >> "SCRVJSSIIASAJSAP"

```

## 🔑 API

`randomstring(options)`
  - `options`
    - `length` - the length of the random string. (default: 32) [OPTIONAL]
    - `type` - define the character set for the string. (default: 'alphanumeric') [OPTIONAL]
      - `alphanumeric` - [0-9 a-z A-Z]
      - `alphabetic` - [a-z A-Z]
      - `numeric` - [0-9]
      - `hex` - [0-9 a-f]
      - `binary` - [01]
      - `octal` - [0-7]
      - `ascii-printable` - [0-7 a-z A-Z !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ] see [here](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)
    - `charset` - define a custom character set to use. This overrides whatever `type` is set. (default: '') [OPTIONAL]
    - `capitalization` - define whether the output should be lowercase / uppercase only. Ignore this option to return both in the string (default: null) [OPTIONAL]
      - `lowercase`
      - `uppercase`

## ⚙️ Command Line Usage
You need to install globally with:

```
npm install -g random-string-gen
```

Use any of the following in you CLI (they will perform the same way)

`randomstring <options>`, `random-string <options>`, `random-string-gen <options>`, `random-string-generator <options>`.

See Examples below:

```
  $ randomstring
  > 3hXyYxyBbg4tcH5wWqpeIM8Pbk38mQTk

  $ randomstring 8
  > WXEj5Nm3

  $ random-string-gen length=16 charset=javascript
  > ivrapaavsjaricvt
```

## 🧪 Tests

```
npm install
npm test
```

## 🔒 LICENSE

`random-string-gen` is licensed under the MIT license. © MadeByRaymond (Daniel Obiekwe).

---

## ❤️ Support

If you find this package helpful, you can support our projects here:

[![Buy Me a Smoothie](https://img.buymeacoffee.com/button-api/?text=Buy%20Me%20a%20Smoothie&emoji=🍹&slug=MadeByRaymond&button_colour=FFDD00&font_colour=000000&font_family=Comic&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/MadeByRaymond)

