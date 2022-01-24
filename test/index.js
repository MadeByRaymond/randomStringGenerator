"use strict";

const assert = require("assert");
const randomString = require('..');

const testLength = 101;
const testLengthCheck = testLength < 1 ? 0 : testLength;

// Returns a String
assert.equal(typeof(randomString()), "string", new Error('Result is not a string'));

// Defaults to 32 characters in length
assert.equal(randomString().length, 32, new Error('Result doesn\'t default to 32 character string'));
assert.equal(randomString('food').length, 32, new Error('Result doesn\'t default to 32 character string'));

// Accepts the length as a single parameter
assert.equal(randomString(14).length, 14, new Error('Result doesn\'t accept length as a parameter'));

// Accepts the length as an option parameter
assert.equal(randomString({length: testLength}).length, testLengthCheck, new Error('Result doesn\'t accept length as an option parameter'));
assert.equal(randomString({length: testLength, type: 'numeric'}).length, testLengthCheck, new Error('Result doesn\'t accept length as an option parameter'));
assert.equal(randomString({length: testLength, charset: 'testString'}).length, testLengthCheck, new Error('Result doesn\'t accept length as an option parameter'));
assert.equal(randomString({length: testLength, capitalization: 'uppercase'}).length, testLengthCheck, new Error('Result doesn\'t accept length as an option parameter'));

// Accepts 'numeric' as type option
assert.equal(randomString({length: testLength, type: 'numeric'}).search(/\D/ig), -1, new Error('Result doesn\'t accept `numeric` as a type option'));

// Accepts 'alphabetic' as type option
assert.equal(randomString({length: testLength, type: 'alphabetic'}).search(/\d/ig), -1, new Error('Result doesn\'t accept `alphabetic` as a type option'));

// Accepts 'alphanumeric' as type option
assert.equal(randomString({length: testLength, type: 'alphanumeric'}).search(/[^0-9a-z]/ig), -1, new Error('Result doesn\'t accept `alphanumeric` as a type option'));

// Accepts 'hex' as type option
assert.equal(randomString({length: testLength, type: 'hex'}).search(/[^0-9a-f]/ig), -1, new Error('Result doesn\'t accept `hex` as a type option'));

// Accepts 'binary' as type option
assert.equal(randomString({length: testLength, type: 'binary'}).search(/[^01]/ig), -1, new Error('Result doesn\'t accept `binary` as a type option'));

// Accepts 'octal' as type option
assert.equal(randomString({length: testLength, type: 'octal'}).search(/[^0-7]/ig), -1, new Error('Result doesn\'t accept `octal` as a type option'));

// Accepts 'ascii-printable' as type option
assert.equal(randomString({length: testLength, type: 'ascii-printable'}).search(/[^a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\]\^_`{|}~-]*$]/ig), -1, new Error('Result doesn\'t accept `ascii-printable` as a type option'));

// Accepts the character set as a single parameter
assert.equal(randomString('xyz').search(/[^xyz]/ig), -1, new Error('Result doesn\'t accept character set as an option parameter'));

// Accepts custom character set as `charset` option
assert.equal(randomString({length: testLength, charset: 'xyz'}).search(/[^xyz]/ig), -1, new Error('Result doesn\'t accept custom character set as `charset` option'));

// Accepts `uppercase` as a capitalization option
assert.equal(randomString({length: testLength, capitalization: 'uppercase'}).search(/[a-z]/g), -1, new Error('Result doesn\'t accept `uppercase` as a capitalization option'));

// Accepts `lowercase` as a capitalization option
assert.equal(randomString({length: testLength, capitalization: 'lowercase'}).search(/[A-Z]/g), -1, new Error('Result doesn\'t accept `lowercase` as a capitalization option'));

// Returns unbiased random strings
(function() {
    const s = randomString({ charset: 'abcdefghijklmno', length: testLength });
    let counts = {};

    assert.equal(s.search(/[^a-o]/g), -1, new Error('Result doesn\'t accept custom character set as `charset` option'));

    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      if (typeof counts[c] === "undefined") {
        counts[c] = 1;
      } else {
        counts[c]++;
      }
    }

    Object.keys(counts).sort().forEach(function(k) {
      let percentageAvg = (counts[k] * 100) / testLength;
      assert(percentageAvg <= (testLength < 2 ? 100 : 50),
             "bias on `" + k + "': expected percentage average less than 50%. \nPercentage average on `" + k + "` is " + percentageAvg + "%, got " + counts[k] + " counts");
    });
})();