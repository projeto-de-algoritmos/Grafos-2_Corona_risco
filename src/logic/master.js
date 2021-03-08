const express = require('express');
const app = express();
const path = require('path');
const graph = require('./class/Graph');
const bodyParser = require('body-parser');
const name = require('./database/names');

app.set('views', path.join(__dirname,"..", 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

let g = new graph(71);

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
console.log(allGroups);



app.get('/', async(req, res) => {

    res.render("home", {name : name});

})

app.post('/', async(req,res)=>{

    const nameInfect = req.body.name;
    var riskGroup = [];
 
    if(nameInfect != undefined){
      var vertex = allGroups.keys();
      //Encontrando grupo com risco de infecção, dada uma pessoa infectada.
      for (var i of vertex) {
        var listAdj = allGroups.get(i);
        for (var j = 0; j < listAdj.length; ++j) {
          if(listAdj[j] == nameInfect ){
            var riskGroup = listAdj.slice();
            break; 
          }
        }
      }
      if(riskGroup.length)res.render("pessoas", {riskGroup: riskGroup});
      else {
        res.redirect("/");
      }
    }
    else {
      res.redirect("/");
    }
      
})

app.listen(3030, () => {
    console.log("App running");
})