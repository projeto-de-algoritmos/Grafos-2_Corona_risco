const Graph = require('../logic/graph');

var teste1 = new Graph(5);
// Adicionando Vertice;
teste1.addVertex(0);
teste1.addVertex(1);
teste1.addVertex(2);
teste1.addVertex(3);
teste1.addVertex(4);

// Adicionando Aresta;
teste1.addEdge(1, 0); 
teste1.addEdge(0, 2); 
teste1.addEdge(2, 1); 
teste1.addEdge(0, 3); 
teste1.addEdge(3, 4);

console.log("DFS -> Profundidade\n");
teste1.dfs();
teste1.timeSorted();
teste1.dfsInverseGraph()