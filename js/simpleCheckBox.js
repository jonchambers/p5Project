
let canvas;

let check1;
let check2;
let check3;

let drawBool = false;

let button;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  background(0);
  check1 = createCheckbox('Option1', false);

  check2 = createCheckbox('Option2', false);

  check3 = createCheckbox('Option3', false);

  check1.style('z-index', '2');
  check1.style('position', 'relative');

  check2.style('z-index', '2');
  check2.style('position', 'relative');

  check3.style('z-index', '2');
  check3.style('position', 'relative');

  button = createButton("submit");
  button.style('position', 'relative');

  //trigger function when button is pressed
  button.mousePressed(checkFunction);


}

//check the status of the checkboxes and change the background
//depending on what checkbox is checked.
//you can also flip booleans here too, to trigger an function that
//needs to be updated like in check3 below.
function checkFunction(){
  if(check1.checked()){

    background(255, 0, 0);
    drawBool = false;
  }

  if(check2.checked()){

    background(0, 255, 0);
    drawBool = false;
  }

  if(check3.checked()){
    background(0, 0, 255);
    drawBool = true;

  }

  //reset the checkboxes to unchecked
  check1.checked(false);
  check2.checked(false);
  check3.checked(false);

}

function pencilFunction(){
  strokeWeight(10);
  stroke(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}


function draw(){

  //if drawBool is true, calll the pencil function
  if(drawBool == true){
    pencilFunction();
  }

}
