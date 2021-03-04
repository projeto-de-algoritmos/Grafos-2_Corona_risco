const graph = require('./class/Graph');
const name = require('./database/names');
const Person = require('./class/Person');

var pessoas = [];

var ambiente = new graph(71);

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

for(var i = 0 ; i<name.length; ++i){
    ambiente.addVertex(name[i]);
    pessoas.push(new Person(name[i]));
}

for(var j = 0; j < name.length; ++j){
    var verifica = [];
    var edges = parseInt(Math.random() * (3 - 0) + 0);
    for(var h = 0; h < edges; ++h){
       var vertex = parseInt(Math.random() * (72 - 0) + 0);
       if(vertex!=j && validate(verifica.sort((a,b) => a-b), vertex , verifica.length)){

           ambiente.addEdge(name[j],name[vertex]);
           verifica.push(vertex);

       }
    }
}
ambiente.print();
ambiente.dfs();
ambiente.dfsInverseGraph();
