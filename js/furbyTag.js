//user input
let greeting;
let nameInput;

//furby game object
let furby;
let furbyX;
let furbyY;

let furbyXspeed;
let furbyYspeed;

let bloop;

let canvas;

let score = 0;

let mouseCollide;

let rotation = 0;

let startGameBool = false;
let endGameBool = false;


function preload(){
  furby = loadImage("images/furby.png");
  bloop = loadSound("audio/bloop.wav");

}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  background(0);

  furbyX = random(15, windowWidth-15);
  furbyY = random(15, windowHeight-15);

  furbyXspeed = 2;
  furbyYspeed = 2;

  imageMode(CENTER);

  beginning();
}

function beginning(){

  greeting = createP('Please type your name and press enter');
  createElement('br');
  nameInput = createInput();
  nameInput.changed(startGame);

}

function startGame(){
  greeting.hide();
  nameInput.hide();
  startGameBool = true;
  background(0);

  fill(255);
  rotation++;
  textAlign(CENTER);
  textSize(40);
  text(nameInput.value() + " your score is: " + score*100, windowWidth/2, 50);

  mouseCollide = dist(mouseX, mouseY, furbyX, furbyY);

  push();
    translate(furbyX, furbyY);
    rotate(radians(rotation));
    image(furby, 0, 0, 30, 30);
  pop();

  furbyX = furbyX + furbyXspeed;
  furbyY = furbyY + furbyYspeed;

  if(furbyX <= 15 || furbyX >= windowWidth -15){
    furbyXspeed = furbyXspeed * -1;
  }
  if(furbyY <= 15 || furbyY >= windowHeight -15){
    furbyYspeed = furbyYspeed * -1;
  }

  if(mouseCollide < 15){
    score++;
    bloop.play();
    furbyX = random(15, windowWidth-15);
    furbyY = random(15, windowHeight-15);
    furbyXspeed = furbyXspeed * 1.3;
    furbyYspeed = furbyYspeed * 1.3;
  }

  if(score >= 3){
    startGameBool = false;
    endGameBool = true;

  }


}

function endGame(){
    background(0);
    for(let i =0; i< 20; i++){
      image(furby, random(windowWidth), random(windowHeight), 30, 30);
    }
    text("You did it " + nameInput.value() + "!!!!!", windowWidth/2, 50);
    rotation++;
    push();
    translate(windowWidth/2, windowHeight/2);
    rotate(radians(rotation));
    image(furby, 0, 0);
    pop();
}

function draw(){

  if(startGameBool == true){
    startGame();
  }
  if(endGameBool == true){
    endGame();
  }

}
