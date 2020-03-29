// nippon-colors visulization

// create canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

// colors
const chineseColors = require('chinese-colors');
// size
var width, height, pixelRatio;

function randomColorDraw(){
	const colorIndex = Math.floor(Math.random() * chineseColors.length);
	const chineseColor = chineseColors[colorIndex];
  // draw background
  context.fillStyle = chineseColor.value;
  context.fillRect(0, 0, canvas.width, canvas.height);

  //draw text
  var totalHeight = canvas.height/6;
  var titleHeight = totalHeight * 0.75;
  var subTitleHeight = totalHeight * 0.25;

  context.fillStyle = "white";
  context.textAlign = "center";

	context.font = subTitleHeight + 'px sans-serif';
	context.fillText(chineseColor.value, canvas.width/2, canvas.height/2 - totalHeight / 2 + titleHeight / 2 - titleHeight);

  context.font = titleHeight + 'px sans-serif';
  context.fillText(chineseColor.name, canvas.width/2, canvas.height/2 - totalHeight / 2 + titleHeight / 2);

  context.font = subTitleHeight + 'px sans-serif';
  context.fillText(chineseColor.romanized, canvas.width/2, canvas.height/2 - totalHeight / 2 + titleHeight / 2 + subTitleHeight * 1.2);
}

// Resizing the canvas
function resize() {
  pixelRatio = window.devicePixelRatio;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  randomColorDraw();
}

function init(){
  resize();
  randomColorDraw();
}

init();

document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
window.addEventListener('resize', resize, false);
window.addEventListener("mousedown", randomColorDraw, { passive: false });
window.addEventListener("touchstart", randomColorDraw, { passive: false });
