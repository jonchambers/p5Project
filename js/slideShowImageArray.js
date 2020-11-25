
let imgs = [];
let randomImage;


function setup(){
noCanvas();
  for (let i=0; i<2; i++) {
    //adding images to the empty imgs array
    //in this case, the images need to be named 0.png, 1.png, 2.png, etc
    //and be indside the images folder
    //You also need to change the for loop number to match how many images you have...so it's 2 right now b/c i have two image
    //if you have 10 images, it should be i<10
    imgs[i] = loadImage("images/" + i + ".png");
  }
}
