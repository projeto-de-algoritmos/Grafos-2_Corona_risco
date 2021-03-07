const Graph = require('../logic/class/Graph');

var teste1 = new Graph(8);
// Adicionando Vertice;
teste1.addVertex('a');
teste1.addVertex('b');
teste1.addVertex('c');
teste1.addVertex('d');
teste1.addVertex('e');
teste1.addVertex('f');
teste1.addVertex('g');
teste1.addVertex('h');

// Adicionando Aresta;
teste1.addEdge('a', 'b');
teste1.addEdge('b', 'e');
teste1.addEdge('e', 'b');
teste1.addEdge('c', 'c');
teste1.addEdge('c', 'b');
teste1.addEdge('d', 'c');
teste1.addEdge('d', 'b');
teste1.addEdge('d', 'e');
teste1.addEdge('d', 'f');
teste1.addEdge('f', 'h');
teste1.addEdge('f', 'g');
teste1.addEdge('g', 'd');
teste1.addEdge('h', 'f');


console.log("DFS -> Profundidade\n");
teste1.dfs();
teste1.timeSorted();
teste1.dfsInverseGraph()