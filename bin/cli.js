#! /usr/bin/env node

var read = require("stream-read");
var toDot = require("../");

read(process.stdin, parse);

function parse(err, graph) {
	if (err) return error(err);
	write(toDot(JSON.parse(graph)));
}

function write(graph) {
	process.stdout.write(graph);
}

function error(err) {
	process.stderr.write(err);
}
