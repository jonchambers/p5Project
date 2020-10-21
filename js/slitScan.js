let capture;
let x = 0;
let w;
let h;

function setup(){
  createCanvas(windowWidth, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  pixelDensity(1);
  //capture.hide();
  background(0);
  w = capture.width;
  h = capture.height;
}


function draw(){
  //image(capture, 0, 0);
  capture.loadPixels();

  copy(capture, w/2, 0, 1, h, x, 0, 1, h);

  x= x + 1;

  if(x>windowWidth){
    x=0;
  }

}
