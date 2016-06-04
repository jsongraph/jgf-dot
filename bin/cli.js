#! /usr/bin/env node

var read = require('read-file-stdin');

var toDot = require('../');

read(process.argv[2], function (err, buffer) {
  if (err) throw err;
  process.stdout.write(toDot(JSON.parse(buffer)));
});
