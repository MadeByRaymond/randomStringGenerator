#!/usr/bin/env node

const { argv } = require("yargs");
const randomString = require('..');

let options = {};

if (argv.length) {
    options = {...options, length: argv.length}
}
if (argv.type) {
    options = {...options, type: argv.type}
}
if (argv.charset) {
    options = {...options, charset: argv.charset}
}
if (argv.capitalization) {
    options = {...options, capitalization: argv.capitalization}
}

if (Object.keys(options).length < 1 && argv._[0]) {
    options = argv._[0]
}

let s = randomString(options);

console.log(s);
return s;