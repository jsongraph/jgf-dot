#! /usr/bin/env node

var process = require('process');

var toDot = require('../');

var fileContent = '';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    fileContent += chunk
  }
});

process.stdin.on('end', function() {
  process.stdout.write(toDot(JSON.parse(fileContent)));
});
