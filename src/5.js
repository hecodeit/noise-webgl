// https://github.com/sighack/seventy-five-circles

// create canvas
const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

// variable
let width, height, pixelRatio
let counter = 1
let isRun = true
let functionNum = 1
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
  let xshift = Math.random()*20
  let yshift = Math.random()*20
  context.beginPath()
  for(let a=0; a<Math.PI*2; a+=Math.PI*2/180){

    const xoff = Math.cos(a) * r + x + xshift
    const yoff = Math.sin(a) * r + y + yshift
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
  for(let a=0.3; a<2*r; a+=Math.random()*30+1){
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
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
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
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
      context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
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

// fill with circles
function circle10(x, y, r){
  let rt = Math.random()*Math.PI*2
  for(let a=0.3; a<2*r; a+=Math.random()*2+a/20){
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
    context.stroke()
  }
}

// fill with circles
function circle11(x, y, r){
  let rt = Math.random()*(Math.PI/4)
  let ii=0.01
  for(let a=0.3; a<2*r; a+=7){
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
    context.stroke()
  }
}

function circle12(x, y, r){
  let rt = Math.random()*(Math.PI/2)
  for(let a=0.3; a<2*r; a+=Math.random()*20+1){
    context.beginPath()
    const xoff = Math.cos(rt) * (r-a/2) + x
    const yoff = Math.sin(rt) * (r-a/2) + y
    context.arc(xoff, yoff, a/2, 0, 2 * Math.PI)
    context.stroke()
  }
}

// fill with circles
function circle13(x, y, r){
  for(let a=0; a<10; a++){
    let nr = Math.random()*(r-1)+1;
    let rt = Math.random()*Math.PI*2
    context.beginPath()
    const xoff = Math.cos(rt) * nr + x
    const yoff = Math.sin(rt) * nr + y
    context.arc(xoff, yoff, (r-nr), 0, 2 * Math.PI)
    context.stroke()
  }
}

// fill with circles
function circle14(x, y, r){
  for(let a=0; a<10; a++){
    let nr = Math.random()*((r-1)/2)+1;
    let rt = Math.random()*(Math.PI*2)
    context.beginPath()
    const xoff = Math.cos(rt) * nr + x
    const yoff = Math.sin(rt) * nr + y
    context.arc(xoff, yoff, (r-nr), 0, 2 * Math.PI)
    context.stroke()
  }
}

// fill with circles
function circle15(x, y, r){
  for(let a=0; a<1000; a++){
    let nr = Math.random()*r
    let rt = Math.random()*(Math.PI*2)
    context.beginPath()
    const xoff = Math.cos(rt) * nr + x
    const yoff = Math.sin(rt) * nr + y
    context.arc(xoff, yoff, 10, 0, 2 * Math.PI)
    context.stroke()
  }
}

// https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly
function circle16(x, y, r){
  for(let a=0; a<100; a++){

    let rt = r * Math.sqrt(Math.random())
    let theta = Math.random() * Math.PI * 2

    context.beginPath()
    const xoff = Math.cos(theta) * rt + x
    const yoff = Math.sin(theta) * rt + y
    context.arc(xoff, yoff, 10, 0, 2 * Math.PI)
    context.stroke()
  }
}

// like circle16 but draw with lines
function circle17(x, y, r){
  context.beginPath()
  for(let a=0; a<40; a++){
    let rt = r * Math.pow(Math.random(), 1/10)
    let theta = Math.random() * Math.PI * 2
    const xoff = Math.cos(theta) * rt + x
    const yoff = Math.sin(theta) * rt + y
    context.lineTo(xoff, yoff)
  }
  context.stroke()
}

// like circle16 but draw with lines
function circle18(x, y, r){
  for(let a=0; a<1000; a++){
    context.beginPath()
    let rt = r * Math.pow(Math.random(), 1/4)
    let theta = Math.random() * Math.PI * 2
    const xoff = Math.cos(theta) * rt + x
    const yoff = Math.sin(theta) * rt + y
    context.arc(xoff, yoff, 10, 0, 2 * Math.PI)
    context.stroke()
  }
}

// fill with lines
function circle19(x, y, r){
  for(let i=0; i<40; i++){
    let theta1 = Math.random()*Math.PI*2
    let theta2 = Math.random()*Math.PI*2
    let rt1 = r * Math.pow(Math.random(), 1/10)
    let rt2 = r * Math.pow(Math.random(), 1/10)

    let cx1 = Math.cos(theta1) * rt1 + x
    let cy1 = Math.sin(theta1) * rt1 + x
    let cx2 = Math.cos(theta2) * rt2 + x
    let cy2 = Math.sin(theta2) * rt2 + x

    context.beginPath()
    context.moveTo(cx1, cy1)
    context.lineTo(cx2, cy2)
    context.stroke()
  }
}

// fill with lines
function circle20(x, y, r){
  for(let i=0; i<40; i++){
    let theta = Math.random()*Math.PI*2
    let rt1 = r * Math.pow(Math.random(), 1/6)
    let rt2 = r * Math.pow(Math.random(), 1/6)

    let cx1 = Math.cos(theta) * rt1 + x
    let cy1 = Math.sin(theta) * rt1 + x
    let cx2 = Math.cos(theta) * rt2 + x
    let cy2 = Math.sin(theta) * rt2 + x

    context.beginPath()
    context.moveTo(cx1, cy1)
    context.lineTo(cx2, cy2)
    context.stroke()
  }
}

function circle21(x, y, r){
  for(let i=0.2; i<=r; i+=Math.random()*30.34){
    context.beginPath()
    context.arc(x, y, i, 0, 2 * Math.PI)
    context.stroke()
  }
}

function circle22(x, y, r, tIncrement){
  for(let i=.5; i<=r; i+=10){
    let theta = Math.random()*Math.PI*2
    let rt = r * Math.pow(Math.random(), 1/4)
    let cx = Math.cos(theta) * rt + x
    let cy = Math.sin(theta) * rt + x
    context.beginPath()
    context.arc(cx, cy, (r-rt), 0, 2 * Math.PI)
    context.stroke()
  }
}

function circle23(x, y, r, tIncrement){
  for(let i=0.2; i<=r; i+=Math.random()*30.34){
    context.beginPath()
    context.arc(x, y, i, Math.random()*Math.PI, Math.random()*Math.PI*2)
    context.stroke()
  }
}

function circle24(x, y, r, tIncrement){
  for(let i=.5; i<=r; i+=60){
    let theta = Math.random()*Math.PI*2
    let rt = r * Math.pow(Math.random(), 1/2)
    let cx = Math.cos(theta) * rt + x
    let cy = Math.sin(theta) * rt + x
    context.beginPath()
    context.arc(cx, cy, (r-rt),  Math.random()*Math.PI/2, Math.random()*Math.PI*2)
    context.stroke()
  }
}

// fill with triangle
function circle25(x, y, r){
  for(let i=0; i<100; i++){
    let rt1 = Math.random()*Math.PI*2
    let rt2 = Math.random()*Math.PI*2
    let rt3 = Math.random()*Math.PI*2

    let r1 = Math.random()*r
    let r2 = Math.random()*r
    let r3 = Math.random()*r

    let cx1 = x + r1 * Math.cos(rt1)
    let cy1 = x + r1 * Math.sin(rt1)
    let cx2 = x + r2 * Math.cos(rt2)
    let cy2 = x + r2 * Math.sin(rt2)
    let cx3 = x + r3 * Math.cos(rt3)
    let cy3 = x + r3 * Math.sin(rt3)

    context.beginPath()
    context.moveTo(cx1, cy1)
    context.lineTo(cx2, cy2)
    context.lineTo(cx3, cy3)
    context.closePath()
    context.stroke()
  }
}

function circle26(x, y, r){
  let rt = Math.random()*Math.PI*2
  let sx1 = x + r * Math.cos(rt);
  let sy1 = y + r * Math.sin(rt);
  let sx2 = x + r * Math.cos(rt + Math.PI);
  let sy2 = y + r * Math.sin(rt + Math.PI);
  let step = 10
  context.beginPath()
  context.moveTo(sx1, sy1)
  context.lineTo(sx2, sy2)
  context.stroke()
  for (let i = step; i < r; i+=step) {
   context.save()
   context.translate(x, y)
   context.rotate(rt)
   context.translate(0, -i)
   let l = Math.sqrt(r * r - i * i)
   context.beginPath()
   context.moveTo(l, 0)
   context.lineTo(-l, 0)
   context.stroke()
   context.translate(0, 2*i)
   context.beginPath()
   context.moveTo(l, 0)
   context.lineTo(-l, 0)
   context.stroke()
   context.restore()
  }
}

function circle27(x, y, r){
  let rt = Math.random()*Math.PI*2
  let sx1 = x + r * Math.cos(rt);
  let sy1 = y + r * Math.sin(rt);
  let sx2 = x + r * Math.cos(rt + Math.PI);
  let sy2 = y + r * Math.sin(rt + Math.PI);
  let step = 28
  context.beginPath()
  context.moveTo(sx1, sy1)
  context.lineTo(sx2, sy2)
  context.stroke()
  for (let i = step; i < r; i+=step) {
   context.save()

   let l = Math.sqrt(r * r - i * i)

   context.translate(x, y)
   context.rotate(rt)
   context.translate(0, -i)

   // draw line
   context.beginPath()
   context.moveTo(l, 0)
   context.lineTo(-l, 0)
   context.stroke()

   context.translate(0, 2*i)
   //
   // draw line
   context.beginPath()
   context.moveTo(l, 0)
   context.lineTo(-l, 0)
   context.stroke()

   context.restore()

   if(step>3){
     step-=1
   }
  }
}

function circle28(x, y, r){
  let rt = Math.random()*Math.PI*2
  context.save()
  context.translate(x, y)
  context.rotate(rt)
  let step = 20
  for(let dist=0; dist<r; dist+=step){
    //calculate the angle
    let theta = Math.asin(dist / r);
    //calculate x,y based on the angle
    let x1 = r * Math.cos(theta);
    let y1 = r * Math.sin(theta);
    //get the opposite side of the circle
    let x2 = -1 * x1;
    let y2 = y1;
    //get the corresponding top half line
    let x3 = x1;
    let y3 = -1 * y1;
    let x4 = x2;
    let y4 = -1 * y2;
    //draw the lines
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    //avoid drawing the center line twice in case alpha is used in the stroke color
    if (dist > 0) {
      context.beginPath()
      context.moveTo(x3, y3)
      context.lineTo(x4, y4)
      context.stroke()
    }
  }
  context.restore()
}

function dashed_line(r, l) {
  let k = -l
  let blank = true
  if (Math.random() > 0.8){
    blank = false
  }

  while (k < l) {
    let nk;
    blank = !blank;
    if (!blank) {
      nk = k + Math.random() *r/2 + r/10
      if (nk > l)
      {
        nk = l;
      }
      context.beginPath()
      context.moveTo(k, 0)
      context.lineTo(nk, 0)
      context.stroke()
    } else {
      nk = k + Math.random() *r/20 + r/10
    }
    k = nk;
  }
}

function circle29(x, y, r){
  let rt = Math.random()*Math.PI*2
  let step = 28

  context.save()
  context.translate(x, y)
  context.rotate(rt)
  dashed_line(r, r)
  context.restore()
  for (let i = step; i < r; i+=step) {
   context.save()

   let l = Math.sqrt(r * r - i * i)

   context.translate(x, y)
   context.rotate(rt)
   context.translate(0, -i)

   // draw line
   dashed_line(r, l)

   context.translate(0, 2*i)
   //
   // draw line
   dashed_line(r, l)

   context.restore()
  }
}

function circle30(x, y, r){
  let rt = Math.random()*Math.PI*2
  let step = 20
  for(let dist=0; dist<r; dist+=step){
    //calculate the angle
    let theta = Math.asin(dist / r)+rt
    //calculate x,y based on the angle
    let x1 = r * Math.cos(theta)
    let y1 = r * Math.sin(theta)
    //get the opposite side of the circle
    let theta2 = Math.asin(dist / r)-rt
    let x2 = r * Math.cos(theta2-Math.PI)
    let y2 = r * Math.sin(theta2)
    //get the corresponding top half line
    let theta3 = Math.asin(dist / r)+rt+Math.PI
    let x3 = r * Math.cos(theta3)
    let y3 = r * Math.sin(theta3)

    let theta4 = Math.asin(dist / r)-rt+Math.PI
    let x4 = r * Math.cos(theta4-Math.PI)
    let y4 = r * Math.sin(theta4)
    //draw the lines
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    //avoid drawing the center line twice in case alpha is used in the stroke color
    if (dist > 0) {
      context.beginPath()
      context.moveTo(x3, y3)
      context.lineTo(x4, y4)
      context.stroke()
    }
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
  context.globalAlpha = 0.5;
  context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // circle
  context.globalAlpha = 1;
  // circle1(0, 0, 400)
  let tIncrement = map_range(Math.sin(counter), -1, 1, 0.05, 0.4)
  context.strokeStyle = 'rgba(0,0,0,0.2)'

  // draw
  context.save()
  context.translate(canvas.width/2, canvas.height/2)
  // circle28(0, 0, 400, tIncrement)
  eval('circle'+functionNum+'(0,0,400,tIncrement)')
  context.strokeText('#'+functionNum, 0, 500);
  context.restore()
  counter+=0.04;
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
  context.textAlign = 'center'
  context.font = "64px sans-serif"

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  draw()
}


init()
animate()


function keyDown(event){
  const keyName = event.key;
  if (keyName === 'ArrowLeft' && functionNum > 1) {
    functionNum --
  }
  else if(keyName === 'ArrowRight' && functionNum < 30){
    functionNum ++
  }
}
document.addEventListener('keydown', keyDown);
window.addEventListener('resize', init, false)
window.addEventListener("mousedown", stop, { passive: false });
window.addEventListener("touchstart", stop, { passive: false });
