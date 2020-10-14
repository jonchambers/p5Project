let ellipseX = 0;
let ellipseY = 0;

let pointX = 100;
let pointY = 200;

let furby;
let imac;
let skyGIF;


function preload(){
  furby = loadImage("images/furby.png");
  imac = loadImage("images/imac.png");
  skyGIF = createImg("images/sky.gif");

}

function setup() {
  // put setup code here to run once

  //create canvas 500 by 500 px
  createCanvas(windowWidth, windowHeight);


  //print(windowWidth);
  //change rectangle x,y coordinates to the center of rect
  rectMode(CENTER);
  imageMode(CENTER);

  ellipseX = random(ellipseX, windowWidth);
  ellipseY = random(ellipseY, windowHeight);

  noCursor();
}

function draw() {
  background(180, 40, 130);

  smooth();
  //styles for the ellipse
  noStroke();
  // put drawing code here to run in a loop
  ellipse(ellipseX, ellipseY, 150, 150);

  //styles for the rect
  stroke(100, 255, 80);
  strokeWeight(20);
  fill(50, 200, 120);
  rect(800, 300, 200, 300);

  //styles for the triangle
  stroke(random(255), random(255), random(255));
  strokeWeight(random(10,60));
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  //styles for the point
  fill(120);
  stroke(40, 200, 100);
  strokeWeight(20);
  //point is only x, y coordinate

  point(pointX, pointY);
  strokeWeight(20);
  line(30, 200, 800, 600);

  strokeWeight(10);
  line(pointX, pointY, 700, 500);
  skyGIF.position(300, 400);
  image(furby, windowWidth/2, windowHeight/2, 400, mouseY);

  image(imac, mouseX, mouseY, 60, 50);

}
