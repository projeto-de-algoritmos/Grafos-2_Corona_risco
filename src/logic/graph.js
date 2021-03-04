class Graph {

  constructor(vertex) {
    this.vertex = vertex;
    this.listAdj = new Map();
    this.listAdjInverse = new Map();
    this.time = 0;
    this.prev = [];
    this.post = [];
  }

  getKeys() {
    return this.lis1tAdj.keys();
  }
  getValues(i) {
    return this.listAdj.get(i);
  }
  addVertex(v) {
    this.listAdj.set(v, []);
    this.listAdjInverse.set(v, []);
  }
  addEdge(v, w) {
    this.listAdjInverse.get(w).push(v);
    this.listAdj.get(v).push(w);
  }

  print() {
    var vertex = this.listAdj.keys();
    console.log('VERTEX -> LIST\n');
    for (var i of vertex) {
      var listAdj = this.listAdj.get(i);
      var sum = '';
      for (var j = 0; j < listAdj.length; ++j) {
        sum += listAdj[j];
        if (j != listAdj.length - 1) sum += ' && ';
      }
      console.log(i + ' -> ' + sum);
    }
  }
  printInverse() {
    var vertex = this.listAdjInverse.keys();
    console.log('VERTEX -> LIST\n');
    for (var i of vertex) {
        var listAdj = this.listAdjInverse.get(i);
        var sum = '';
        for (var j = 0; j < listAdj.length; ++j) {
          sum += listAdj[j];
          if (j != listAdj.length - 1) sum += ' && ';
        }
      console.log(i + ' -> ' + sum);
    }
  }

  //dfs
  dfs() {
      this.time = 1;
      let visitados = [];
      var vertex = this.listAdj.keys();  
      for (var i of vertex) {
          if(!visitados[i])this.path(i, visitados)
      }
  }
  path(v, visitados) {
      visitados[v] = true;
      //console.log(v); // Vertice atual  
      this.prev[v] = this.time;
      this.time++;
      var get_values = this.listAdj.get(v);
    
      for (var w in get_values) {
        var value = get_values[w];
        if (!visitados[value]) this.path(value, visitados);
      }
      this.post[v] = {time : this.time, node : v};
      this.time++;
  }

  timeSorted(){
    var sortable = [];
    for (var i in this.post) {
      sortable.push(this.post[i]);
    }
    sortable.sort(function(a, b) {
      return a.time - b.time;
    });
    for (var j=0; j<sortable.length ; ++j){
     sortable[j] = sortable[j].node;
    }
    return sortable;
  }
  
  // dfs inverse graph
  dfsInverseGraph() {
      var i = 0;
      var aux = this.timeSorted();
      let visitadosInverse = [];
      while (aux[0] != undefined){ 
        var v = aux.pop();
        //console.log(v);
    
        if (!visitadosInverse[v]) 
        {   
            console.log("Grupo " + ++i + "\n");
            this.pathInverse(v, visitadosInverse);
        }
      } 
  }
  pathInverse(v, visitados) {
      visitados[v] = true;
      console.log(v)// Vertice atual  

      var get_values = this.listAdjInverse.get(v);
      for (var w in get_values) {
          var value = get_values[w];
          if (!visitados[value]) this.pathInverse(value, visitados);
      }
  }
}

module.exports = Graph;