const Graph = require('../logic/class/Graph');

var teste1 = new Graph(8);
// Adicionando Vertice;
teste1.addVertex(0);
teste1.addVertex(1);
teste1.addVertex(2);
teste1.addVertex(3);
teste1.addVertex(4);
teste1.addVertex(5);
teste1.addVertex(6);
teste1.addVertex(7);

// Adicionando Aresta;
teste1.addEdge(0, 1);
teste1.addEdge(1, 2);
teste1.addEdge(2, 3);
teste1.addEdge(2, 4);
teste1.addEdge(3, 0);
teste1.addEdge(4, 5);
teste1.addEdge(5, 6);
teste1.addEdge(6, 4);
teste1.addEdge(6, 7);


console.log("DFS -> Profundidade\n");
teste1.dfs();
teste1.timeSorted();
teste1.dfsInverseGraph()