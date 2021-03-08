const graph = require('./class/Graph');
const name = require('./database/names');

var g = new graph(71);

// Busca para verificar se a vertice já foi adicionada anteriormente
var validate = (array, index, size) => {
  var esq = -1,
    dir = size;
  while (esq < dir - 1) {
    var half = (esq + dir) / 2;
    if (array[half] < index) esq = half;
    else dir = half;
  }
  return dir === index ? false : true;
};

// Adicionando Vertice;
for (var i = 0; i < name.length; ++i) {
  g.addVertex(name[i]);
}

// Adicionando Arestas de modo aleátorio
for (var j = 0; j < name.length; ++j) {

  var verifica = [];

  // Considerando que uma pessoa pode visitar no max 4 ambientes.
  var edges = parseInt(Math.random() * (4 - 0) + 0);

  for (var h = 0; h < edges; ++h) {
    
    // Considerando que no total = 71 pessoas, ou seja, 71 vértices.
    var vertex = parseInt(Math.random() * (71 - 0) + 0);

    if (
      vertex!=j 
      &&
      validate(verifica.sort((a, b) => a - b),vertex,verifica.length)
    ){
      g.addEdge(name[j], name[vertex]);
      verifica.push(vertex);
    }
  
  }

}
// Aplicando algoritmo para encontrar SCC;
g.dfs();
g.dfsInverseGraph();

var allGroups = g.getGroups();

// Pessoa infectada.
var nome = 'Mariano';
 
var vertex = allGroups.keys();

// Encontrando grupo com risco de infecção, dada uma pessoa infectada.
for (var i of vertex) {
  var listAdj = allGroups.get(i);
  for (var j = 0; j < listAdj.length; ++j) {

    if(listAdj[j] == nome){
      var riskGroup = listAdj.slice();
      break;
    }

  }
}
// Todos os grupos;
console.log(allGroups);
// Grupo com maiores Riscos; 
console.log(riskGroup);

