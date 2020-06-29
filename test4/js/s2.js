function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  }
  
  function draw() {
    background(250);
    rotateY(frameCount * 0.01);
  
    for (let j = 0; j < 5; j++) {
      push();
      for (let i = 0; i < 80; i++) {
        translate(
          sin(frameCount * 0.001 + j) * 100,
          sin(frameCount * 0.001 + j) * 100,
          i * 0.1
        );
        rotateZ(frameCount * 0.002);
        push();
        // cone(20,50)
        // noStroke()
        sphere(30)
        pop();
        
      }
      
      pop();
    }
  }
  