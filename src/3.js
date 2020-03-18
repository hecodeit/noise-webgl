const canvas = document.createElement('canvas')
document.body.appendChild(canvas);
const context = canvas.getContext('2d')
const nipponColors = require('nippon-colors-gen');

// size
var width, height, pixelRatio;
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

function init(){
  resize();

	const nipponColor = nipponColors[25];
  // draw background
  context.fillStyle = nipponColor.value;
  context.fillRect(0, 0, canvas.width, canvas.height);


}

init();
