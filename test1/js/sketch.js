let boy;
function preload(){
    boy=loadModel("model/2.obj")

}

function setup(){
    createCanvas(300,300,WEBGL);
}

function draw(){
    background(200);
    orbitControl()
    let dirX = (mouseX / width ) * 2;
    let dirY =mouseY;
    // directionalLight(250, 250, 250, -dirX, -dirY);
    // rotateY(dirX);
    // text("PORTFOLIO",width/2,height/2)
    rotateX(160);
    rotateY(PI)

    // rotateY(radians(frameCount));
    // translate(mouseX, mouseY, mouseY*.001)
    

    // ambientLight(100);

    // shininess(20);
    // ambientLight(50);
    // specularColor(255, 0, 0);
    pointLight(255, 255, 255, 0, 50, width/2);
    // specularColor(0, 255, 0);
    // pointLight(0, 255, 0, 0, 50, 50);
    // rotateY(millis() / 1000);
//   specularMaterial(255);

    noStroke();
    model(boy);

}
