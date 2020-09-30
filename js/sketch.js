

function setup() {
  // put setup code here to run once

  //create canvas 500 by 500 px
  createCanvas(windowWidth, windowHeight);

  background(180, 60, 220);
  //print(windowWidth);
  //change rectangle x,y coordinates to the center of rect
  rectMode(CENTER);
}

function draw() {
  smooth();
  //styles for the ellipse 
  noStroke();
  // put drawing code here to run in a loop
  ellipse(300, 500, 150, 150);

  //styles for the rect
  stroke(100, 255, 80);
  strokeWeight(20);
  fill(50, 200, 120);
  rect(800, 300, 200, 300);

  //styles for the triangle
  stroke(40, 100, 100);
  strokeWeight(20);
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  //styles for the point
  fill(120);
  stroke(40, 200, 100);
  strokeWeight(10);
  //point is only x, y coordinate
  point(mouseX, mouseY);
  print(mouseX);
}
