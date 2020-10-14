let playVideoButton;
let playAudioButton;

let pulsar;
let mountain;

let pulsarSlider;
let mountainSlider;

let sliderR;
let sliderG;
let sliderB;

let videoPlaying = false;

let canvas;
function preload(){

  pulsar = loadSound("audio/PULSAR.mp3");

}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  createElement('h2', 'Mix the background color, play and plause video and audio');

  createP('Red value');
  sliderR = createSlider(0, 255, 255, 1);
  createP('Green value');
  sliderG = createSlider(0, 255, 255, 1);
  createP('Blue value');
  sliderB = createSlider(0, 255, 255, 1);
  createElement('br');

  mountain = createVideo(['video/mountain.mp4']);
  mountain.style('width', '540px');
  mountain.style('height', '360px');
  mountain.position(300, 100);

  playVideoButton = createButton('Play Mountain');
  playVideoButton.class('mountainVid');
  playVideoButton.mousePressed(playVideoToggle);
  createElement('br');
  mountainSlider = createSlider(0, 4, 1);
  createElement('br');

  playAudioButton = createButton('Play Pulsar');
  playAudioButton.mousePressed(playAudioToggle);
  createElement('br');
  pulsarSlider = createSlider(0, 3, 1, 0.01);
  pulsar.setVolume(0.5);
}

function playVideoToggle(){
  print("video!");
  if(videoPlaying){
    mountain.pause();
    playVideoButton.html('Play Mountain');
  }else{
    mountain.loop();
    playVideoButton.html('Pause Mountain');
  }
  videoPlaying = !videoPlaying;
}

function playAudioToggle(){
  if(!pulsar.isPlaying()){
    pulsar.play();
    playAudioButton.html('Pause Pulsar');
  }else{
    pulsar.pause();
    playAudioButton.html('Play Pulsar');
  }
}


function draw(){
  pulsar.rate(pulsarSlider.value());
  mountain.speed(mountainSlider.value());
  background(sliderR.value(), sliderG.value(), sliderB.value());

  print(sliderR.value());

}
