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
    const radiusIncrement = map_range(Math.sin(counter), -1, 1, -200, 0)
    const xoff = Math.cos(t) * (r+radiusIncrement) + x
    const yoff = Math.sin(t) * (r+radiusIncrement) + y
    context.lineTo(xoff, yoff)
    r-=.4
    t+=tIncrement
  }
  context.stroke()
}

// fill with circles
function circle4(x, y, r){
  let rt = Math.random()*Math.PI*2
  for(let a=0; a<2*r; a+=Math.random()*30+1){
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI);
    context.stroke()
  }
}

// fill with circles
function circle5(x, y, r){
  for(let a=0; a<2*r; a+=Math.random()*30+1){
    let rt = Math.random()*Math.PI*2
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI);
    context.stroke()
  }
}

// fill with circles
function circle6(x, y, r){
  for(let i=0; i<4; i++){
    for(let a=0; a<2*r; a+=Math.random()*50+1){
      let rt = Math.random()*Math.PI*2
      context.beginPath()
      const xoff = Math.cos(rt) * (r-a/2) + x
      const yoff = Math.sin(rt) * (r-a/2) + y
      context.arc(xoff, yoff, a/2, 0, 2 * Math.PI);
      context.stroke()
    }
  }
}

// fill with lines
function circle7(x, y, r){
  for(let i=0; i<40; i++){
    let rt1 = Math.random()*Math.PI*2
    let rt2 = Math.random()*Math.PI*2
    let cx1 = x + r * Math.cos(rt1)
    let cy1 = x + r * Math.sin(rt1)
    let cx2 = x + r * Math.cos(rt2)
    let cy2 = x + r * Math.sin(rt2)

    context.beginPath()
    context.moveTo(cx1, cy1)
    context.lineTo(cx2, cy2)
    context.stroke()
  }
}

// fill with continu lines
function circle8(x, y, r){
  context.beginPath()
  for(let i=0; i<40; i++){
    let rt = Math.random()*Math.PI*2
    let cx = x + r * Math.cos(rt)
    let cy = x + r * Math.sin(rt)
    context.lineTo(cx, cy)
  }
  context.stroke()
}

// fill with triangle
function circle9(x, y, r){
  for(let i=0; i<10; i++){
    let rt1 = Math.random()*Math.PI*2
    let rt2 = Math.random()*Math.PI*2
    let rt3 = Math.random()*Math.PI*2
    let cx1 = x + r * Math.cos(rt1)
    let cy1 = x + r * Math.sin(rt1)
    let cx2 = x + r * Math.cos(rt2)
    let cy2 = x + r * Math.sin(rt2)
    let cx3 = x + r * Math.cos(rt3)
    let cy3 = x + r * Math.sin(rt3)

    context.beginPath()
    context.moveTo(cx1, cy1)
    context.lineTo(cx2, cy2)
    context.lineTo(cx3, cy3)
    context.closePath()
    context.stroke()
  }
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

  context.strokeStyle = 'rgba(0,0,0,0.2)'
  // circle2(0, 0, 400, tIncrement)
  circle9(0, 0, 400, tIncrement)

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
  context.lineWidth = pixelRatio
  context.lineJoin = 'round'

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.translate(canvas.width/2, canvas.height/2)
  draw()
}


init()
animate()

window.addEventListener('resize', init, false)
window.addEventListener("mousedown", stop, { passive: false });
window.addEventListener("touchstart", stop, { passive: false });
