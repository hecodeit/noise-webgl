// create canvas
const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const context = canvas.getContext('2d')
var SimplexNoise = require('simplex-noise')
var simplex = new SimplexNoise(Math.random)

// variable
let width, height, pixelRatio
let radiusIncrement = 0.01
// method
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
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
let frameCount = 0;
function draw(){
  // draw line
  context.beginPath()

  let sideCount = Math.round(Math.random()*10-5)
  for(let a=0; a<Math.PI*2; a+=Math.PI*2/180){

    // sin loop
    // const offset = map_range(Math.sin(a * sideCount + 36/sideCount+frameCount), -1, 1, 1, 1.2)
    // const radius = 400 * offset + map_range(Math.sin(frameCount), -1, 1, -200, 0)

    // SimplexNoise
    const xoff = map_range(Math.cos(a), -1, 1, 0, 2)
    const yoff = map_range(Math.sin(a), -1, 1, 0, 2)
    const radius = map_range(simplex.noise3D(xoff, yoff, frameCount), 0, 1, 300, 330)
    + map_range(Math.sin(frameCount), -1, 1, -200, 200)


    const x = Math.cos(a) * radius
    const y = Math.sin(a) * radius
    context.lineTo(x, y)
  }
  // context.closePath()
  context.strokeStyle = 'rgba(255,255,255,0.7)'
  context.stroke()

  radiusIncrement+=1
  frameCount+=0.01
}

function animate(){
  requestAnimationFrame(animate)
  context.globalAlpha = 0.04;
  context.translate(-canvas.width/2, -canvas.height/2)
  context.fillStyle = '#3C2F41'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.translate(canvas.width/2, canvas.height/2)
  context.globalAlpha = 1;
  draw()
}

function init(){
  frameCount = 0;
  resize();

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.lineWidth = pixelRatio*2
  context.lineJoin = 'round'

  context.translate(canvas.width/2, canvas.height/2)

  draw()
}

init()
animate()

window.addEventListener('resize', init, false)
