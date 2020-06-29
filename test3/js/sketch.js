var lineHeight=150;
let  angle=0;
let position=0;
let iter=0


function setup() {

    createCanvas(window.innerWidth, window.innerHeight,WEBGL);
    angle=PI/3;
    
    background(55);
    stroke(255);
    ambientLight(100);
  
    translate(window.innerWidth/2, window.innerHeight,0);
  
    // position=50;
    // angle=createSlider(0, TWO_PI, PI / 4, 0.01).value();
  }
  
  function draw() {
  
    if(iter%2){
    drawTree(lineHeight,true);
  }
  else{
    drawTree(lineHeight,false);
  }
}


  function drawTree(len,c){
    iter++
    // box();
    // line(-100, 0, i, 100, 0, i);
    if(iter%2)
   {  
      // plane(2,-len)
      cylinder(2,-len)
      line(0,0,0,0,-len,0);
      translate(0, -len);
      len= len*.6;
      // createP(len);
      if(len >2){
        push();
        
        rotate(angle);
        drawTree(len);
        pop();
        push();
        rotate(-angle);
        drawTree(len);
        pop();
      }}
      else
      {   
         line(0,0,0,0,-len,0);
         translate(0, -len);
         len= len*.6;
         // createP(len);
         if(len >2){
           push();
           rotate(angle);
           drawTree(len);
           pop();
           push();
           rotate(-angle);
           drawTree(len);
           pop();
         }}
   


}
