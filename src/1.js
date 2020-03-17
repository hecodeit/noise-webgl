const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

var width, height, pixelRatio;

function resize () {
  width = 320;
  height = 320;
  pixelRatio = window.devicePixelRatio;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = width+"px";
  canvas.style.height = height+"px";
}

function draw () {
  context.save();
  context.scale(pixelRatio, pixelRatio);

  context.fillStyle = 'black';
  context.lineWidth = 10;

  context.beginPath();
  context.arc(width/2, height/2, (height-20)/2.4, 0, Math.PI * 2);
  context.rect(10, 10, width-20, height-20);
  context.stroke();

  context.restore();
}

resize();
draw();
