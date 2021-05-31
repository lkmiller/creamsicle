// https://lkmiller.github.io/creamsicle/ --> 


function runViz() {
let canvasSize = 600; 
function setup () {
  createCanvas(canvasSize, canvasSize, WEBGL);
  amp = new p5.Amplitude();
  button = createButton('start/stop');
  button.mousePressed(toggleSong);
  song.play(); 
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause (); 
  } else
    song.play(); 
}
  
function preload(){
  song = loadSound('kyoto.mp3');
}

function draw () {
  var vol = amp.getLevel(); 
  
background(0);
  
 stroke(0)
  strokeWeight(1)
  
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, vol*200, 10);
  
  translate(30, 80)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 20, 10);
  
  translate(70, 90)
  rotateX(vol * 0.05);
  rotateY(frameCount * 0.01);
  torus(10, 40, 10);
  
  translate(100, 50)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(15, vol*200,20 );
}
}