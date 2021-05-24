let canvasSize = 500; 


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
  song = loadSound('disciples.mp3');
}

function draw () {
  var vol = amp.getLevel(); 
  
 background("#9BAAC5");
  
 stroke(0)
  strokeWeight(1)
  
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, vol*200, 10);
  
  translate(60, 80)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 20, 10);
  
  translate(70, 90)
  fill(vol*1000);
  rotateX(vol * 0.05);
  rotateY(frameCount * 0.01);
  torus(10, 10, 10);
  
  translate(100, 50)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(vol*200, 10,30 );
}