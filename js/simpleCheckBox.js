
let canvas;

let check1;
let check2;
let check3;


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
  button.mousePressed(checkFunction);
  button.style('position', 'relative');

  // check1.changed(checkFunction);
  // check2.changed(checkFunction);
  // check3.changed(checkFunction);

}

function checkFunction(){
  if(check1.checked()){

    // check2.checked(false);
    // check3.checked(false);
    background(255, 0, 0);
  }

  if(check2.checked()){

        background(0, 255, 0);
  }

  if(check3.checked()){
      background(0, 0, 255);
  }

   check1.checked(false);
    check2.checked(false);
     check3.checked(false);

}


function draw(){


}
