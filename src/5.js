// https://github.com/sighack/seventy-five-circles

// create canvas
const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

// variable
let width, height, pixelRatio
let counter = 1
let isRun = true
// method
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
function stop(){
  isRun = !isRun
}
function counting(){
  counter ++;
}

// simple circle
function circle1(x, y, r){
  context.strokeStyle = 'rgba(0,0,0,0.3)'
  context.beginPath()
  for(let a=0; a<Math.PI*2; a+=Math.PI*2/180){
    const xoff = Math.cos(a) * r + x
    const yoff = Math.sin(a) * r + y
    context.lineTo(xoff, yoff)
  }
  context.stroke()
}

// line fill center to border
function circle2(x, y, r){
  for(let a=Math.random(); a<180; a+=1+Math.random()*0.1234){
    const grayValue = Math.random()*.1
    context.strokeStyle = `rgba(0,0,0,${grayValue})`
    context.beginPath()
    context.moveTo(x, y)
    const xoff = Math.cos(a) * r + x
    const yoff = Math.sin(a) * r + y
    context.lineTo(xoff, yoff)
    context.stroke()
  }
}

// spiral fill
function circle3(x, y, r, tIncrement){
  let t = 0
  context.beginPath()
  while (r>=0) {
    context.strokeStyle = 'rgba(0,0,0,0.4)'
    const radiusIncrement = map_range(Math.sin(counter), -1, 1, -200, 0)
    const xoff = Math.cos(t) * (r+radiusIncrement) + x
    const yoff = Math.sin(t) * (r+radiusIncrement) + y
    context.lineTo(xoff, yoff)
    r-=.4
    t+=tIncrement
  }
  context.stroke()
}



function resize() {
  pixelRatio = window.devicePixelRatio
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * pixelRatio
  canvas.height = height * pixelRatio
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
}

function draw(){
  // background
  context.globalAlpha = 0.04;
  context.translate(-canvas.width/2, -canvas.height/2)
  context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // circle
  context.translate(canvas.width/2, canvas.height/2)
  context.globalAlpha = 1;
  // circle1(0, 0, 400)
  let tIncrement = map_range(Math.sin(counter), -1, 1, 0.05, 0.4)
  // circle2(0, 0, 400, tIncrement)
  circle3(0, 0, 1000, tIncrement)

  counter+=0.01;
}

function animate(){
  requestAnimationFrame(animate)
  if(isRun){
    draw()
  }
}


function init(){
  resize();
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.translate(canvas.width/2, canvas.height/2)
  draw()
}

context.lineWidth = pixelRatio
context.lineJoin = 'round'
init()
animate()

window.addEventListener('resize', init, false)
window.addEventListener("mousedown", stop, { passive: false });
window.addEventListener("touchstart", stop, { passive: false });
