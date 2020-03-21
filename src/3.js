// study
// https://www.youtube.com/watch?v=VNmTubIDZOY&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=9
const canvas = document.createElement('canvas')
document.body.appendChild(canvas);
const context = canvas.getContext('2d')
const dat = require('dat.gui');
const Stats = require('stats.js');
// size
var width, height, pixelRatio;
var stats;
// Resizing the canvas
function resize() {
  pixelRatio = window.devicePixelRatio;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}
resize();

var wave = {
  y: canvas.height/2,
  length: 0.01,
  amp: 100,
  freq: 0.01,
  stop:function() {
    this.freq = 0;
   }
}
let increment = 0.01;
function draw(){
  // draw background
  context.fillStyle = 'rgba(255,255,255,.04)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw sin
  context.beginPath();
  context.moveTo(0, canvas.height/2);
  for(let i=0; i<canvas.width; i+=10){
    context.lineTo(i, wave.y + Math.sin(i*wave.length+increment)*wave.amp*Math.sin(increment));
  }
  context.strokeStyle = 'black';
  context.stroke();

  increment += wave.freq;
}

function animate(){
  requestAnimationFrame(animate);
  stats.begin();

  if(wave.freq!=0){
    draw();
  }

	stats.end();


}

function init(){

  resize();

  stats= new Stats();
  stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild( stats.dom );

  const gui = new dat.GUI();
  gui.add(wave, 'y', 0, canvas.height)
  gui.add(wave, 'length', -100, 100)
  gui.add(wave, 'amp', -canvas.height, canvas.height)
  gui.add(wave, 'freq', -2, 2)
  gui.add(wave, 'stop')

  context.lineWidth = 2;
  context.lineJoin = 'round';

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  // draw
  draw();
  animate();
}

init();

window.addEventListener('resize', resize, false);
