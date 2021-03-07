var vertices = [];

function setup() {
  createCanvas(1200, 560);
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(158, 158, 158);

  for (var i = 0; i < vertices.length; i++) {
    fill(0, 137, 123);
    stroke(0, 137, 123);
    ellipse(vertices[i].x, vertices[i].y, 30, 30);
    console.log(vertices[i]);
  }
}
