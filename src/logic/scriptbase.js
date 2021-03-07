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
    fill(255);
    stroke(255);
    ellipse(vertices[i].x, vertices[i].y, 15, 15);
  }
}
