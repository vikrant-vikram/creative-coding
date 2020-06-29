
let img;
function preload(){
img=loadImage("./model/1.jpg")
// img=loadImage("./model/1.jpg")
z=0
}
function setup(){
  createCanvas(windowWidth , windowHeight, WEBGL)
  background("gray")
  img.resize(500,500)
  
}
function draw(){
  

// image(img, width/2-img.width, height/2-img.height,100, 100)
// createP(img.length)
orbitControl()
background("gray")
fill(0);
noStroke()
smooth()
tiles=200
tileSize=width/tiles
push()
// translate(0,0,z);
// rotateY(radians(frameCount*2));

  for ( x = 0; x < tiles; x++) {
    for ( y = 0; y < tiles; y++) {
      c = img.get(parseInt(x*tileSize),parseInt(y*tileSize));
      b = map(brightness(c),0,255,0,1);
      z = map(b,0,1,-150,150);
      
      push();
      fill(c)
      translate(x*tileSize - width/2, y*tileSize - height/2, z);
      sphere(tileSize*b);
      pop();
      
    }
  }
  pop();





noLoop()






// fill(0);
//   noStroke();
//   sphereDetail(3);
//   float tiles = 100;
//   float tileSize = width/tiles;
//   push();
//   translate(width/2,height/2);
//   rotateY(radians(frameCount));
  
//   for (int x = 0; x < tiles; x++) {
//     for (int y = 0; y < tiles; y++) {
//       color c = img.get(int(x*tileSize),int(y*tileSize));
//       float b = map(brightness(c),0,255,1,0);
//       float z = map(b,0,1,-150,150);
      
//       push();
//       translate(x*tileSize - width/2, y*tileSize - height/2, z);
//       sphere(tileSize*b*0.8);
//       pop();
      
//     }
//   }
//   pop();
}

function windowResized(){
  


}