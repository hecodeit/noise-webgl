// create canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

// size
var width, height, pixelRatio;

const nipponColor = {
	"name": "銀鼠",
	"romanized": "GINNEZUMI",
	"value": "#91989F"
};

function colorDraw(){
  // draw background
  context.fillStyle = nipponColor.value;
  context.fillRect(0, 0, canvas.width, canvas.height);

  //draw text
  var totalHeight = canvas.height/6;
  var titleHeight = totalHeight * 0.75;
  var subTitleHeight = totalHeight * 0.25;

  context.fillStyle = "white";
  context.textAlign = "center";

  context.font = titleHeight + 'px sans-serif';
  context.fillText(nipponColor.name, canvas.width/2, canvas.height/2 - totalHeight / 2 + titleHeight / 2);

  context.font = subTitleHeight + 'px sans-serif';
  context.fillText(nipponColor.romanized, canvas.width/2, canvas.height/2 - totalHeight / 2 + titleHeight / 2 + subTitleHeight * 1.2);
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

  colorDraw();
}

function init(){
  resize();
  colorDraw();
}

init();

window.addEventListener('resize', resize, false);
