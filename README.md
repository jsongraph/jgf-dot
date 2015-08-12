# jgf-dot
Convert a [json graph](https://github.com/jsongraph/json-graph-specification) into a dot file for use with Graphviz and other visualizers

## Command line
Install [nodejs](https://nodejs.org/) and run:

```bash
npm install -g jgf-dot
```

Then you can do the conversion using:

```bash
cat graph.json | jgfdot > graph.dot
```

### `jgfdot`
Reads a json graph from `STDIN` and outputs the Dot file to `STDOUT`

## Javascript API

You can also use the programmatic API to convert json graph objects to dot file strings

```js
var toDot = require("jgf-dot");

var graph = require("./graph.json");

var fs = require("fs");

var dot = toDot(graph);

fs.writeFileSync("graph.dot", "utf8");
```
