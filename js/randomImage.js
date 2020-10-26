
let imgs = [];
let randomImage;

function preload() {
  for (let i=0; i<2; i++) {
    //adding images to the empty imgs array
    //in this case, the images need to be named 0.png, 1.png, 2.png, etc
    //and be indside the images folder
    imgs[i] = loadImage("images/" + i + ".png");
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //get the random image.
  //you can also call this in a function once you trigger it
  randomImage = int(random(imgs.length));
}

function draw() {
  //display the random image
  image(imgs[randomImage], windowWidth/2, windowHeight/2);

}
