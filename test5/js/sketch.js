withinX=10;
withinY=10;
rev=false
rot=0
h=80;
r=40;
trigger=true
function setup(){
  createCanvas(900, 900,WEBGL);
  background("gray");
  withinX=int(width/(2*r))
  withinY=int(height/h);
  translate(int(width/2),int(height/2),0)
}
function draw(){
  background("blue")
  translate(-width/2,-height/2)
  // rotateX(QUARTER_PI)
  // box();
  smooth()
  // noFill()
  // fill("green")
  // noStroke()
  // stroke()
  print(rot)
  if(rot>=90){
    rot=0
    rev=!rev
  }
  

  // trigger=!trigger
  // ambientLight(55)
// directionalLight("red",width/2,height/2,-200)
  normalMaterial()
  // ambientMaterial("red")
  // ambientLight(55)
  for(i=0;i<withinY;i++){
    for(j=0;j<withinX;j++){
      push()
      translate(2*j*r+r, i*h+h/2, 0)
      
      if((j+i)%2==0 && rev==false){
        temp=radians(frameCount)
        rotateX(radians(rot))
        // rot+=temp
      }
      else if(rev && (j+i)%2!=0){
        rotateX(radians(-rot))


      }
      // cylinder(radius, height, [detailX], [detailY])
                                                                                                                                                             
      box(2*r, h)
      pop()
    }
  }
  temp=radians(frameCount)
  // rotateX(temp)
  rot+=2
  
}