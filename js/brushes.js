let furby;

let sprayPaintBool = false;
let furbyBrushBool = false;

function preload(){
  furby = loadImage("images/furby.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);

  background(255);

  imageMode(CENTER);
}


function draw(){
  if(sprayPaintBool == true){
    sprayPaint();
  }

  if(furbyBrushBool == true){
    furbyBrush();
  }


}

function keyPressed(){
  if(key == 's'){
    sprayPaintBool = true;
    furbyBrushBool = false;
  }

  if(key == 'f'){
    sprayPaintBool = false;
    furbyBrushBool = true;
  }

  if(key == 'o'){
    sprayPaintBool = false;
    furbyBrushBool = false;
  }

}


//custome functions below!!!
function sprayPaint(){
  frameRate(20);
  fill(30, 120, 200);
  noStroke();
  for(let i=0; i < 50; i++){
    ellipse(random(mouseX -30, mouseX +30),random(mouseY -30, mouseY +30), 2, 2);
  }
}


function furbyBrush(){
  image(furby, mouseX, mouseY, 30, 30);

}
