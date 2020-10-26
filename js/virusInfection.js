let virusX;
let virusY;

let virusXspeed = 2;
let virusYspeed = 2;

let virusDiameter = 200;

//victim variables and booleans
let victim1X;
let victim1Y;

let victim2X;
let victim2Y;

let victim1Bool = false;
let victim2Bool = false;


function setup(){
  createCanvas(windowWidth, windowHeight);
  virusX = random(100, windowWidth - 100);
  virusY = random(100, windowHeight - 100);

  victim1X= random(100, windowWidth - 100);
  victim1Y= random(100, windowHeight - 100);

  victim2X= random(100, windowWidth - 100);
  victim2Y= random(100, windowHeight - 100);
}

function draw(){
  background(0);
  noStroke();
  fill(0, 255, 0);

  //virus animation
  virusX = virusX + virusXspeed;
  virusY = virusY + virusYspeed;

  if(virusX >= windowWidth - 100 || virusX <= 100){
    virusXspeed = virusXspeed * -1;
  }

  if(virusY >= windowHeight - 100 || virusY <= 100){
    virusYspeed = virusYspeed * -1;
  }
  ellipse(virusX, virusY, 200, 200);


  //victim 1 info
  //if the virus gets to close, the boolean flips to true
  if(dist(virusX, virusY, victim1X, victim1Y)<200){
    victim1Bool = true;
  }
  //if boolean is true, the victim is infected so the color changes to red
  if(victim1Bool == true){
    fill(255,0, 0);
  }else{
    fill(255);
  }
  ellipse(victim1X, victim1Y, 200, 200);


  //victim 2 info
  //if the virus gets to close, the boolean flips to true
  if(dist(virusX, virusY, victim2X, victim2Y)<200){
    victim2Bool = true;
  }
  //if boolean is true, the victim is infected so the color changes to red
  if(victim2Bool == true){
    fill(255,0, 0);
  }else{
    fill(255);
  }
  ellipse(victim2X, victim2Y, 200, 200);

}

//"heal" the victims with mouse press
function mousePressed(){
  //flip the boolean back to false and heal them
  if(dist(mouseX, mouseY, victim1X, victim1Y) < 100 && victim1Bool==true){
    victim1Bool = false;
  }

  //flip the boolean back to false and heal them
  if(dist(mouseX, mouseY, victim2X, victim2Y)<100 && victim2Bool==true){
    victim2Bool = false;
  }
}
