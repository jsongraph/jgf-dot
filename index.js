var toGraph = require("graphlib-json-graph");
var dot = require("graphlib-dot");

module.exports = toDot;

function toDot(graph) {
	var graphlibGraph = toGraph(graph);

	// Stringify node metadata
	graphlibGraph.nodes().forEach(function (name) {
		var node = graphlibGraph.node(name);
		if (node.metadata)
			node.metadata = JSON.stringify(node.metadata);
	});

	// Stringify edge metadata
	graphlibGraph.edges().forEach(function (name) {
		var edge = graphlibGraph.edge(name);
		if (edge.metadata)
			edge.metadata = JSON.stringify(edge.metadata);
	});

	// Convert to dot and return
	return dot.write(graphlibGraph);
}
