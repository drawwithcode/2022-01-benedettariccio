var a = 0;
var r = 2;
let varLarp = 0;
let larp_direction = 1;

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('black');

}

function draw() {

  
  var x = r * cos(a);
  var y = r * sin(a);


  a += 0.1;
  r += 1;


  varLarp = varLarp + larp_direction * 0.003;
  if (varLarp > 1 || varLarp<0) {
   
    larp_direction *= -1;
  }

  // create the moving circle with framerate and transform
  push()
  stroke(lerpColor(color('red'), color('blue'), varLarp));
  strokeWeight(1);
  fill(lerpColor(color('blue'), color('red'), varLarp));
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount*19);
  ellipseMode(CENTER);
  ellipse(x, y, frameCount/5, frameCount/5);

  // after framecount>1950 it stops
  if (frameCount == 1950){
  noLoop()
  }
}

