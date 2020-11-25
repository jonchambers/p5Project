let canvas;

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');


}


function draw(){
strokeWeight(10);
line(pmouseX, pmouseY, mouseX, mouseY);

}
