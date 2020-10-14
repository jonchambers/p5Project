

let imacX = [];
let imacY = [];

let imac;

function preload(){
  imac = loadImage("images/imac.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}


function draw(){
  background(100);

  for(let i = 0; i < imacX.length; i++){
    image(imac, imacX[i], imacY[i], 60, 60);
  }

  print(imacX.length, imacY.length);

}


function mousePressed(){

  imacX.push(mouseX);
  imacY.push(mouseY);

}


function keyPressed(){
  if(key == 'x' && imacX.length>0){
    imacX.splice(0, imacX.length); //delete one element at index 0
    imacY.splice(0, imacY.length);
  }
}
