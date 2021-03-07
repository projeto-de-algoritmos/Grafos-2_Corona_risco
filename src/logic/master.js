const graph = require('./class/Graph');
const name = require('./database/names');


var g = new graph(71);


var validate = (array, index, size) => {
    var esq = -1, dir = size;
    while (esq < dir - 1)
    {
        var half = (esq + dir) / 2;
        if (array[half] < index)
            esq = half;
        else
            dir = half;
    }
    return (dir===index) ? false : true;
}

for(var i = 0 ; i<name.length ; ++i){
    g.addVertex(name[i]);
}
//console.log(name.length)

for(var j = 0; j < name.length; ++j){
    var verifica = [];
    var edges = parseInt(Math.random() * (5 - 0) + 0);
    for(var h = 0; h < edges; ++h){
       var vertex = parseInt(Math.random() * (71 - 0) + 0);
       if(validate(verifica.sort((a,b) => a-b), vertex , verifica.length)){

           g.addEdge(name[j],name[vertex]);
           verifica.push(vertex);

       }
    }
}
//g.print();
g.dfs();
g.dfsInverseGraph();
var arebaba = g.getGroups();
console.log(arebaba);
