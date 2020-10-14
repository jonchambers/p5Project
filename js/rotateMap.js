
let imac;

let rotation = 0;

let mouseRotate;
let mouseBG;

function preload(){

  imac = loadImage("images/imac.png");

}


function setup(){
 createCanvas(windowWidth, windowHeight);
imageMode(CENTER);

rectMode(CENTER);
}


function draw(){
mouseBG = map(mouseY, 0, windowHeight, 0, 255);
background(mouseBG);

mouseRotate = map(mouseX, 0, windowWidth, 0, 360);


rotation++;
push();
translate(windowWidth/2, windowHeight/2);
rotate(radians(rotation));
image(imac, 0, 0);
pop();

push();
translate(1000, 300);
rotate(radians(mouseRotate));
rect(0, 0, 200, 200);
pop();

ellipse(400, 200, 100, 100);

}
